// starts a server and listens on port 8081

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello Express App');
})

var server = app.listen(8081, function () {

   var host = server.address().address;
   var port = server.address().port;
   
   console.log("http://127.0.0.1:8081/images/ashish.jpg");
});
