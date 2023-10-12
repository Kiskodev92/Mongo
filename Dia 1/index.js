let mongoose = require("mongoose");
let User = require("./userMDB");
let Profile = require("./ProfileMDB");
let Credentials = require("./CredentialsMDB");

mongoose.connect('mongodb+srv://fran:codenocth@cluster0.z8sjubq.mongodb.net/Reto3',
                {useNewUrlParser : false, useUnifiedTopology : false});

let userDocument = new User({
    login: "Kiskotkd",
    password: "1234"
})

userDocument.save().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log("Error: " + err);
});

let profileDocument = new Profile({
    name: "Fran",
    surname: "Garcia",
    dateOfBirth: "2-11-1992",
    comments: "Lo usamos de ejemplo",
    rol: "estudiante"
});

profileDocument.save()
.then ((data)=>{
    console.log(data);

})
.catch((err)=>{
    console.log(err)
})



let credentialsDocument = new Credentials({
    address: "Calle Laporte, 15",
    phone: 657842114,
    email: "kisko@gmail.com"
});

credentialsDocument.save()
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})