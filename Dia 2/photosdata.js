let mongoose = require ("mongoose");
let Photos = require ("./photomodel");

mongoose.connect('mongodb+srv://fran:codenocth@cluster0.z8sjubq.mongodb.net/Reto3',{useNewUrlParser : false, useUnifiedTopology : false});

let users = [
    { 
        user: "Juan",
        url: "https://alumni.ucm.es/alumni/m/photos/get_image/file/5c38f56dfe2bfa614d508d4d06a4b662.jpg",
        title: "Sonriendo",
        description: "Foto de perfil"
    },
    { 
        user: "María",
        url: "https://us.123rf.com/450wm/vladimirfloyd/vladimirfloyd1610/vladimirfloyd161000312/64790562-joven-moreno-despellejado-mujer-bonita.jpg?ver=6",
        title: "En la playa",
        description: "Vacaciones de verano"
    },
    { 
        user: "Pedro",
        url: "https://t4.ftcdn.net/jpg/00/85/77/75/360_F_85777561_m6EMdjM6Knkz7OLJmN5zr5ZeK359S3G5.jpg",
        title: "Mi fiel Sultan",
        description: "Mi perro en el parque durante las tardes de Domingo"
    }
];

Photos.insertMany(users)
.then(function(docs) {
    console.log("Usuarios insertados:", docs.length);
})
.catch(function(err) {
    console.error(err);
});

// const findPhotos = () => {
//     return Photos.find({ user: "Juan" }).exec();
//   };
  
//   findPhotos()
//     .then((photos) => {
//       console.log(photos);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// const NewDescription = "Nueva descripción de la foto";

// Photos.updateOne({ title: "Sonriendo" }, { description: NewDescription })
//   .then((result) => {
//     console.log(`Se ha modificado la descripción de la foto con título '${ title }'`);
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error('Error al modificar la descripción de la foto:', err);
//   });

// Photos.deleteOne( user: "Juan", title: 'Sonriendo' })
//   .then(function(result) {
//     console.log('Foto eliminada:', result);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

//   Photos.deleteMany({ usua user: "Juan" })
//   .then(function(result) {
//     console.log('Fotos eliminadas:', result);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });