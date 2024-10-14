//Javascript Object & Conditional
//Deklarasi Object
//Object Literal
// let john = {
//   firstName: "John",
//   age: 30,
//   isMarried: true,
//   grade: [80, 90, 100],
//   sayGreetings: function () {
//     console.log("Hello, my name is " + this.firstName);
//   },
//   address: {
//     street: "Jl. Arnold Mononutu Airmadidi",
//     city: "Minahasa Utara",
//     province: "Sulawesi Utara",
//     postalCode: 95371,
//   },
// };
// console.log(john);

// //Mengakses properti dalam object
// //1. Dot notation
// console.log(john.firstName);
// console.log(john.age);
// john.age = 31;
// console.log(john);
// john.job = "Teacher";
// console.log(john);

// //2. Bracket notation
// console.log(john["isMarried"]);
// john["nationality"] = "Indonesia";
// console.log(john);

// // Object method
// john.sayGreetings();

// // Object inside object
// console.log(john.address.city);

// // Delete property dalam object
// delete john.grade;
// console.log(john);

//Javascript Conditional
//1. If - else
// Jika suhu hari ini lebih dari atau sama dengan 37,
// Tampilkan tuhu hari ini panas

// let temp = 35;
// if (temp >= 37) {
//   console.log("Hari ini panas");
// } else {
//   console.log("Hari ini biasa saja");
// }

// //1. If - else if - else
// let grade = 85;
// if (grade > 90 && grade < 101) {
//   console.log("A");
// } else if (grade > 84 && grade < 91) {
//   console.log("A-");
// }

// 3. Switch - case
// Jika angka 1 tampilkan Januari
// Jika angka 2 tampilkan februari

let number = 3;
switch (number) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Not found");
    break;
}
