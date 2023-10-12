const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login: {
      type: String,
  
    },
    password: {
      type: String,
      require: true,
      validate: [
        function (password){
          return password.length >= 6;
        },
        'El password necesita tener minimo 6 caracteres'],
        select: false
    },
});

userSchema.pre('save', function(next)
{
    console.log("middleware de entrada");
    if (this.password >= 6){
        console.log("El password tiene el minimo")
        next();
    }else
    console.log("No pasa el mínimo");
})

module.exports = mongoose.model('UserValidation', userSchema);