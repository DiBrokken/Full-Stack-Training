var express = require("express")
//import express, includes all content of ex
var app = express();
//initialize variable called app and execute it


// when we go to "/" we should see "hi there!"
app.get("/", function(req, res){
  res.send("hi there!");
});
  //app.get takes 2 diff parameters, the url or path which is the route
  //the other is a callback function which takes 2 arguments, request and responses
  //req and res are objects, req contains all the information about the req that was made that triggered the routes
  //same for response
  // then respond with text



//-----------------------------------------------
// when we go to "/bye" we should see "goodbye!"
app.get("/bye", function(req, res){
  res.send("goodbye!");
});


// when we go to "/dog" we should see "meow!"
app.get("/dog", function(req, res){
  console.log("someone made a request to /DOG")
  res.send("meow!");
});

//tell express to listen for request (start server)
//we need to write the code to tell it to lsn to requests

app.listen(3000, function(){
  console.log("Serving demo app on port 3000");
});
//end