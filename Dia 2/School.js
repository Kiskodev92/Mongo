const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://fran:codenocth@cluster0.z8sjubq.mongodb.net/Reto3',{useNewUrlParser : false, useUnifiedTopology : false});


const teachersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  groups: [String],
});
const subjectsSchema = new mongoose.Schema({
  title: String,
  teachers: [teachersSchema]
});
const marksSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  subjects: subjectsSchema
});
const studentsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  marks: [marksSchema]
});



let Teachers = mongoose.model('Teachers', teachersSchema);
let Subjects = mongoose.model('Subjects', subjectsSchema);
let Marks = mongoose.model('Marks', marksSchema);
let Students = mongoose.model('Students', studentsSchema);


// let teacher1 =  new Teachers({
//     firstName: "Manuel",
//     lastName: "Pereira",
//     groups: ["a", "b"]
//   })
//   let teacher2 = new Teachers({
//     firstName: "Juan",
//     lastName: "Gómez",
//     groups: ["b", "c"]
//   })
//   let teacher3 = new Teachers({
//     firstName: "María",
//     lastName: "López",
//     groups: ["c", "d"]
//   })
//   let teacher4 = new Teachers({
//     firstName: "Pedro",
//     lastName: "Martínez",
//     groups: ["d", "e"]
//   })


// let subject1 = new Subjects({ title: "Math", teachers: [teacher1, teacher2] })
// let subject2 = new Subjects({ title: "History", teachers: [teacher2] })
// let subject3 = new Subjects({ title: "Ciencies", teachers: [teacher3] })
// let subject4 = new Subjects({ title: "English", teachers: [teacher4] })


// let mark1 = new Marks({ date: "2018-12-01", mark: 7, subjects: subject1 })
// let mark2 = new Marks({ date: "2018-11-15", mark: 8, subjects: subject2 })
// let mark3 = new Marks({ date: "2018-10-30", mark: 6, subjects: subject3 })
// let mark4 = new Marks({ date: "2018-10-15", mark: 9, subjects: subject4 })


// let student1 = new Students({ firstName: "Juan", lastName: "García", marks: [mark1, mark2] })
// let student2 = new Students({ firstName: "María", lastName: "Pérez", marks: [mark2, mark3] })
// let student3 = new Students({ firstName: "Pedro", lastName: "Sánchez", marks: [mark3, mark4] })
// let student4 = new Students({ firstName: "Ana", lastName: "López", marks: [mark1, mark4] })



Teachers.insertMany([teacher1, teacher2, teacher3, teacher4])
  .then(function(docs) {
    console.log("Teachers insertados:", docs.length);
  })
  .catch(function(err) {
    console.error(err);
  });



//   Subjects.insertMany([subject1, subject2, subject3, subject4])
//   .then(function(docs) {
//     console.log("Asignaturas insertadas:", docs.length);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });



//   Marks.insertMany([mark1, mark2, mark3, mark4])
//     .then((docs) => {
//       console.log(`Se han insertado ${docs.length} notas`);
//     })
//     .catch((err) => {
//       console.error(err);
//     });



//   Students.insertMany([student1, student2, student3, student4])
//   .then(function(docs) {
//     console.log("Estudiantes insertados:", docs.length);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });



// Students.findOne({ firstName: "Pedro" })
//   .then((student) => {
//     console.log(`Las notas de Pedro:`);
//     student.marks.forEach((mark) => {
//       console.log(`- ${mark.mark} en ${mark.subjects.title}`);
//     });

//     console.log(`Las asignaturas de Pedro:`);
//     student.marks.forEach((mark) => {
//       console.log(`- ${mark.subjects.title}`);
//     });

//     console.log(`Los profes de Pedro:`);
//     student.marks.forEach((mark) => { 
//       mark.subjects.teachers.forEach((teacher) => {
//         console.log(`- ${teacher.firstName} ${teacher.lastName}`);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });