//express library

var express = require('express')
var app = express();

//refers to the http method get.
//This is a get request
//use call back function to load the page

app.get("/", function(request, response) {
 //you get the request first, then response
 response.send("Hello World");
 
});

app.get()

//listen for incoming signals on this port.

app.listen(process.env.PORT);