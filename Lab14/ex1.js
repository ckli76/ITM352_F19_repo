fs = require('fs');
var myParser = require('body-parser')
var filename = 'user_data.json'
raw_data = fs.readFileSync(filename, 'utf-8')
var users_reg_data = JSON.parse(raw_data);
console.log(users_reg_data);
//load in text and turn into json object