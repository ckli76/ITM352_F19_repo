var fs = require('fs');
var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(myParser.urlencoded({ extended: true }));
var filename = 'user_data.json'

if (fs.existsSync(filename)) { //check to see if file exists
    stats = fs.statSync(filename);
    console.log(filename + ' has ' + stats.size + 'characters');
    raw_data = fs.readFileSync(filename, 'utf-8')
    var users_reg_data = JSON.parse(raw_data);
    console.log(users_reg_data);
} else {
    console.log(filename + ' does not exist!');
}

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body);
    the_username = request.body.username;
    if (typeof users_reg_data[the_username] != 'undefined') { //check if the username exists in the json data
        if (users_reg_data[the_username].password == request.body.password)
            response.send(the_username + ' logged in! ');
    } else {
        response.redirect('/login');
    }
}
);

app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});

app.post("/register", function (request, response) {
    console.log("Got the registration request");
    console.log(request.body)
    let POST = request.body;
    // process a simple register form

    username = POST.username;
    if (typeof users_reg_data[username] == 'undefined') {
        users_reg_data[username] = {};
        users_reg_data[username].name = username;
        users_reg_data[username].password = POST.password;
        if (POST.password != POST.repeat_password)
        {
            console.log("Passwords do not match!");
        }
        users_reg_data[username].email = POST.email;

        var output_data = JSON.stringify(users_reg_data);
        fs.writeFileSync(filename, output_data, "utf-8");

        console.log(output_data)
        response.send(`${username} registered!`);
    }
    else {
        response.send("User " + username + " already taken; try again.")
    }

});

app.listen(8080, () => console.log(`listening on port 8080`));