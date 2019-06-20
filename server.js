const express = require("express");
const cors = require("cors");
var server = express();
var port = 8080;
var data = require("./data.js");
server.use(cors());
server.use(express.urlencoded({
  extended: false
}));
server.use(express.json());

server.get("/user", function (req, res) {
  var response = {
    user: data.user
  }
  res.json(response)
})

server.post("/user", function (req, res) {
console.log(req.body.name);
  if(req.body.name && req.body.age){
    var new_user =
   	 {"name" : req.body.name,
   	 "age": Number(req.body.age),
   	 "created-on": new Date()
   	 }
    res.status(201);
    data.user = new_user;
    res.send()
  }
  else {
    res.status(400)
    res.send();
    }
});


server.get("/greeting", function (req, res) {
  if (!data.user) {
    var response = {
      msg: " Welcome"
    }
  }else{git push -u origin master
    var response = {
      msg: " Welcome " + data.user.name
    }
  }
  res.json(response)
})





server.listen(port, function () {

})
