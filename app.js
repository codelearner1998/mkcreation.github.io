const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/mkcreation");

const DetailSchema = {
  name : "String",
  email : "String",
  message : "String"
};

const Detail = mongoose.model("Detail",DetailSchema);

const test1 = new Detail({
  name : "Sultan",
  email : "Sultan@90gmail.com",
  message : "Hello bro "
})
// test1.save();

app.get("/",function (req,res) {
  res.sendFile("/index.html")
});

app.post("/",function (req,res) {
  
   let  Name = req.body.Name;
   let Email = req.body.Email;
   let Msg = req.body.Message

   const document = new Detail({
    name : Name,
    email : Email,
    message : Msg
  
  });

  document.save();
  
  res.render("index");
});



app.listen("3000",function (req,res) {
    console.log("Server is Started on port 3000");
})

console.log(__dirname);