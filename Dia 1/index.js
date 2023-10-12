let mongoose = require("mongoose");
let User = require("./userMDB");

mongoose.connect('mongodb+srv://fran:codenocth@cluster0.z8sjubq.mongodb.net/',
                {userNewUrlParser: false, useUnifiedTopology: false});