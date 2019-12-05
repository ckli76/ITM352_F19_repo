var express = require("express");
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());


app.get('/set_coookie', function(request, response) {
    response.cookie('myname', 'Rick Kazman', {maxAge: 10000}).send('cookie set');
});

app.get('/use_cookie', function(request, response) {
    output = "No myname cookie found";
    if (typeof request.cookies.myname != undefined) {
        output = `Welcome to the Use Cookie Page ${request.cookies.myname}`;
    }
    response.send(output);
});

app.get('/del_cookie', function(request,response)
{
    response.clearCookie('myname');
    response.send('cookie myname cleared');
});
app.use(express.static('.'));
app.listen(8080, () => console.log(`listening on port 8080`));