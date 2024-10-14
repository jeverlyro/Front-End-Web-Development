// //JavaScript Loop

// //Array Object
let students = [
  {
    id: 1,
    firstName: "John",
    grade: 80,
  },
  {
    id: 2,
    firstName: "Jane",
    grade: 90,
  },
  {
    id: 3,
    firstName: "Bob",
    grade: 100,
  },
];
console.log(students);

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// //2. While Loop
// let i = 0;
// while(i<students.length){
//     console.log(students[i].firstName);
//     i++;
// }

// let i = 0
// do{
//     console.log(students[i].firstName);
//     i++;
// }while(i<students.length);

//4. Array built-in method
//4.a ForEach()

students.forEach(function (item) {
  console.log(item);
});

//4.b Map()
let output = students.map(function (item) {
  return item.firstName;
});
console.log(output);

//4.c Filter()
let outputFilter = students.filter(function (item) {
  return item.grade >= 90;
});
console.log(outputFilter);

//4.d Find()
let outputFind = students.find(function (item) {
  return item.grade >= 90;
});
console.log(outputFind);

//4.e findIndex()
let outputFindIndex = students.findIndex(function (item) {
  return item.firstName === "Jane";
});
console.log(outputFindIndex);
