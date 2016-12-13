// starts a server and listens on port 8081

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello Express App');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   
   console.log("Express Example app listening at http://%s:%s", host, port)
});
