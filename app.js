const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const md5 = require("md5");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB", { useUnifiedTopology: true , useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

app.get("/",function(req,res){
  res.render("home");
});

app.get("/home",function(req,res){
    res.render("home");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/login",function(req,res){
    res.render("login");
});

app.get("/signup",function(req,res){
    res.render("signup");
});

app.post("/signup",function(req,res){
    console.log(req.body.Email);
    const newUser =  new User({
        email: req.body.Email,
        password: md5(req.body.inputPassword)
      });
      newUser.save(function(err){
        if (err) {
          console.log(err);
        } else {
          res.render("home");
        }
      });
});

app.post("/login", function(req, res){
  const username = req.body.Email;
  const password = md5(req.body.inputPassword);

  User.findOne({email: username}, function(err, foundUser){
    if (err) {
      console.log(err);
      console.log('wrong password');
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.render("home");
        }
      }
    }
  });
});


app.listen(8080, function() {
    console.log("Server started on port 8080.");
  });