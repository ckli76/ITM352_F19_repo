var fs = require('fs') //require fs or file system from node
var express = require('express'); //use the express module from Node.js
var app = express(); // Create an object of the express module
var data = require('./public/product_data.js'); //include the data from product_data.js
var products = data.products; // Products is defined as the data from product_data.js
myParser = require("body-parser"); // If I recall, it gets the parser from Node.Js 
var qs = require('querystring');

app.use(myParser.urlencoded({ extended: true }));

var purchase_data; // make a global variable to hold the product selections until we get to the invoice

//Borrowed from previous labs function to test if a string is a non-negative integer 
function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if (q == '') q = 0; // Set no data as if they are 0
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);

}

// Borrowed from Lab13 
app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

app.get('/purchase', function (req, res, next) {
    purchase_data = req.query; // save for later
    if (typeof req.query['purchase_submit'] != 'undefined') {
        console.log(Date.now() + ': Purchase made from ip ' + req.ip + ' data: ' + JSON.stringify(req.query));

        purchase_data = req.query; // get the query string data which has the form data
        // form was submitted so check that quantities are valid then redirect to invoice if ok.

        ExistErrors = false; // clean slate with the assumption everything is right
        total_quantity = 0; // need to check if something was selected so we will look if the total > 0
        for (i = 0; i < products.length; i++) {
            if (purchase_data[`quantity${i}`] != 'undefined') { //If all quantities are not undefined
                arrayquantity = purchase_data[`quantity${i}`]; 
                total_quantity += arrayquantity; 
                if (!isNonNegInt(arrayquantity)) { //check if any quantities are valid
                    ExistErrors = true; // change the clean slate to errors existing
                }
            }
        }
        // Now respond to errors or redirect to login if all is ok
        if (ExistErrors || total_quantity == 0) {
            res.redirect('products_display.html?' + qs.stringify(purchase_data));
        } else { // all good to go!
            res.redirect('./login.html');
        }

    }
});

// Beginning of new assignment
var filename = 'user_data.json' // Set variable filename to reference user_data.json

if (fs.existsSync(filename)) { //check to see if file exists
    stats = fs.statSync(filename);
    console.log(filename + ' has ' + stats.size + ' characters');
    raw_data = fs.readFileSync(filename, 'utf-8')
    var users_reg_data = JSON.parse(raw_data); // variable users_reg_data = users registration data
    // console.log(users_reg_data);
} else {
    console.log(filename + ' does not exist!');
}

app.post("/login", function (request, response) {
    loginData = request.body;
    //console.log(loginData);
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    the_username = loginData.username;
    the_password = loginData.password;
    //console.log(the_username)
    //console.log(the_password)
    if (typeof users_reg_data[the_username] != 'undefined') { //check if the username exists in the json data
        if (users_reg_data[the_username].password == the_password)
            response.redirect('/invoice.html?' + qs.stringify(purchase_data));
    } else {
        response.redirect('./login.html');
    }
}
);

app.post("/register", function (request, response) {
    regData = request.body;
    console.log("Got the registration request");
    console.log(request.body);
    // process a simple register form

    validerrors = false;

    username_input = regData.username.toLowerCase();
    password_input = regData.password;
    REpassword_input = regData.repeat_password;
    email_input = regData.email;

    //Validate username
    var letters = /^[0-9a-zA-Z]+$/;

    if (typeof users_reg_data[username_input] != 'undefined') {
        validerrors = true
    };
    if (username_input.length < 1 && username_input.length > -1) {
        validerrors = true
    };
    if (username_input.length > 0 && username_input.length < 4) {
        validerrors = true
    };
    if (username_input.length > 15) {
        validerrors = true
    };
    if (username_input.match(letters)) { }
    else {
        validerrors = true
    };

    //Validate Password

    if (password_input.length < 1 && password_input.length > -1) {
        validerrors = true
    };
    if (password_input.length > 0 && password_input.length < 5) {
        validerrors = true
    };

    //Validate Re-Entered Password

    if (REpassword_input.length < 1 && REpassword_input.length > -1) {
        validerrors = true
    };
    if (password_input != REpassword_input) {
        validerrors = true
    };

    //Validate Email

    var email_letters = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email_input.length < 1 && email_input.length > -1) {
        validerrors = true
    };

    if (email_input.match(email_letters)) { }
    else { validerrors = true };

    username_input = regData.username;

    if (validerrors == false) {
        users_reg_data[username_input] = {};
        users_reg_data[username_input].name = username_input;
        users_reg_data[username_input].password = regData.password;
        users_reg_data[username_input].email = regData.email;

        console.log(username_input)

        var output_data = JSON.stringify(users_reg_data);
        fs.writeFileSync(filename, JSON.stringify(users_reg_data));

        console.log(output_data)

        response.redirect('/invoice.html?' + qs.stringify(purchase_data));
    }
    else {
        response.redirect('./registration.html');
    }

});


// look for files in the "public" folder and listen on port 8080
app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));

//https://stackoverflow.com/questions/27812639/display-alert-message-in-browser-using-node-js
//https://www.webucator.com/tutorial/learn-ajax/intro-ajax-the-nodejs-server.cfm