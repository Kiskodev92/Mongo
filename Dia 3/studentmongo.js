const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://fran:codenocth@cluster0.z8sjubq.mongodb.net/Reto3',{useNewUrlParser : false, useUnifiedTopology : false});

const TeacherSchema = new mongoose.Schema({

    teacher_first_name: String,
    teacher_last_name: String,
});

const MarksSchema = new mongoose.Schema({   
    
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers : [TeacherSchema]
});

let Teacher = mongoose.model("Teacher", TeacherSchema);
let Marks = mongoose.model("Marks", MarksSchema);


//     let teacher1 = new Teacher({teacher_first_name: "Jesus", teacher_last_name: "Valverde"})
//     let teacher2 = new Teacher({teacher_first_name: "Curro", teacher_last_name: "Jimenez"})
//     let teacher3 = new Teacher({teacher_first_name: "Manuela", teacher_last_name: "Ronda"})
//     let teacher4 = new Teacher({teacher_first_name: "Antonio", teacher_last_name: "Garcia"})
//     let teacher5 = new Teacher({teacher_first_name: "Antonio", teacher_last_name: "Nenta"})
//     let teacher6 = new Teacher({teacher_first_name: "George", teacher_last_name: "Lucas"})
//     let teacher7 = new Teacher({teacher_first_name: "Alicia", teacher_last_name: "Perez"})
//     let teacher8 = new Teacher({teacher_first_name: "Cintia", teacher_last_name: "Trenados"})
//     let teacher9 = new Teacher({teacher_first_name: "Ariel", teacher_last_name: "Estrella"})
//     let teacher10 = new Teacher({teacher_first_name: "Tamara", teacher_last_name: "Trenados"})


//     let marks1 = new Marks({date:("2020-06-12"), mark: 6, student_first_name: "Pepe", student_last_name: "Marquez", group_name: "Clase B", subject_name: "Estrategia", teachers: [teacher1, teacher2]})
//     let marks2 = new Marks({date:("2021-07-13"), mark: 8, student_first_name: "Samuel", student_last_name: "Taras", group_name: "Clase E", subject_name: "Esgrima", teachers: [teacher2]})
//     let marks3 = new Marks({date:("2022-08-14"), mark: 10, student_first_name: "Daniel", student_last_name: "Hidalgo", group_name: "Clase C", subject_name: "Mates", teachers: [teacher3, teacher4]})
//     let marks4 = new Marks({date:("2019-09-15"), mark: 4, student_first_name: "Robert", student_last_name: "Martinez", group_name: "Clase D", subject_name: "Lengua extranjera", teachers: [teacher4]})
//     let marks5 = new Marks({date:("2018-10-16"), mark: 3, student_first_name: "Orianna", student_last_name: "Tirla", group_name: "Clase A", subject_name: "Alquimia", teachers: [teacher5]})
//     let marks6 = new Marks({date:("2020-11-17"), mark: 5, student_first_name: "Victor", student_last_name: "Vazquez", group_name: "Clase C", subject_name: "Karate", teachers: [teacher6]})
//     let marks7 = new Marks({date:("2021-12-18"), mark: 8, student_first_name: "Renato", student_last_name: "Perla", group_name: "Clase F", subject_name: "Medicina", teachers: [teacher7, teacher8]})
//     let marks8 = new Marks({date:("2022-01-19"), mark: 9, student_first_name: "David", student_last_name: "Diamante", group_name: "Clase R", subject_name: "Anatomia", teachers: [teacher8, teacher10]})
//     let marks9 = new Marks({date:("2020-02-20"), mark: 6, student_first_name: "Elena", student_last_name: "Escudero", group_name: "Clase A", subject_name: "Historia", teachers: [teacher9]})
//     let marks10 = new Marks({date:("2019-03-21"), mark: 8, student_first_name: "Rosa", student_last_name: "Herranz", group_name: "Clase H", subject_name: "Medicina", teachers: [teacher10]})


// Teacher.insertMany([teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10])
//   .then(function(docs) {
//     console.log("Teachers insertados:", docs.length);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });


//   Marks.insertMany([marks1, marks2, marks3, marks4, marks5, marks6, marks7, marks8, marks9, marks10])
//     .then((docs) => {
//       console.log(`Se han insertado ${docs.length} notas`);
//     })
//     .catch((err) => {
//       console.error(err);
//     });

// Marks.aggregate([
//     { $match: { subject_name: "Esgrima" } }, // filtramos las notas de la asignatura "Esgrima"
//     { $group: { _id: null, avgMark: { $avg: "$mark" } } }
//   ])
//   .then(result => {
//     const avgMark = result[0].avgMark;
//     console.log(`La nota media de Esgrima es: ${avgMark}`);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// Marks.aggregate([
//     { $group: { _id: null, count: { $sum: 1 } } }
//   ])
//   .then(result => {
//     console.log("Total de alumnos: " + result[0].count); 
//   })
//   .catch(err => {
//     console.log(err);
//   });
  
  
// Marks.aggregate([
//     {
//         $group: {
//             _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" },
//             count: { $sum: 1 }
//         }
//     },
//     {
//         $project: {
//             _id: 0, student_first_name: "$_id.student_first_name", student_last_name: "$_id.student_last_name",
//             count: 1
//         }
//     }
// ]).then((result) => {
//     console.log(result); 
// }).catch((err) => {
//     console.log(err);
// });


// Teacher.aggregate([
//     {
//         $group: {
//             _id: { teacher_first_name: "$teacher_first_name", teacher_last_name: "$teacher_last_name" },
//             count: { $sum: 1 }
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             teacher_first_name: "$_id.teacher_first_name", teacher_last_name: "$_id.teacher_last_name", count: 1
//         }
//     }
// ]).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });



// Marks.aggregate([
//     {
//       $group: {
//         _id: "$group_name", totalStudents: { $sum: 1 }
//       }
//     },
//     {
//       $sort: { _id: -1 }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });


// Marks.aggregate([
//     {
//       $group: {
//         _id: "$subject_name",
//         avgGrade: { $avg: "$mark" }
//       }
//     },
//     {
//       $match: {
//         avgGrade: { $gt: 5 }
//       }
//     },
//     {
//       $sort: {
//         avgGrade: -1
//       }
//     },
//     {
//       $limit: 5
//     },
//     {
//       $project: {
//         _id: 0,
//         subject: "$_id",
//         avgGrade: 1
//       }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });


// Marks.aggregate([
//     {
//       $unwind: "$teachers"
//     },
//     {
//       $group: {
//         _id: { subject_name: "$subject_name", teacher: "$teachers" },
//         count: { $sum: 1 }
//       }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });


// Marks.aggregate([
//     {
//       $unwind: "$teachers"
//     },
//     {
//       $group: {
//         _id: { subject_name: "$subject_name", teacher: { $concat: [ "$teachers.teacher_first_name", " ", "$teachers.teacher_last_name" ] } },
//         count: { $sum: 1 }
//       }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });