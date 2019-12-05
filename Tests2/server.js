var fs = require('fs') //require fs or file system from node
var express = require('express'); //use the express module from Node.js
var app = express(); // Create an object of the express module
var data = require('./public/product_data.js'); //include the data from product_data.js
var products = data.products; // Products is defined as the data from product_data.js
myParser = require("body-parser"); // If I recall, it gets the parser from Node.Js 
var qs = require('querystring');

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

app.use(myParser.urlencoded({ extended: true }));

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
            res.redirect('login.html');
        }

    }
});

// look for files in the "public" folder and listen on port 8080
app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));