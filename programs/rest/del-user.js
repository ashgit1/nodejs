var express = require('express');
var app = express();
var fs = require("fs");

var id = 4;

console.log("del request");

app.delete('/deleteUser', function (req, res) {

  console.log("delete called");

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 4];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})