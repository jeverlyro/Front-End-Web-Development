//Ubahlah syntax ES5 berikut ke dalam ES6
//I Kadek Tresna Jeverly

//1
// const calculateAge = (birthYear) => 2019 - birthYear;

// const yearUntilRetirement = ({year, firstName}) => {
//   const age = calculateAge(year);
//   const retirement = 60 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//   } else {
//     console.log(`${firstName} is already retired.`);
//   }
// };

// yearUntilRetirement({year: 1987, firstName: 'John'});

//2.
// const addNumber = (a, b, c, d, e, f, g) => {
//   const numbers = [a, b, c, d, e, f, g];
//   let sum = 0;
//   numbers.map((num) => {
//     sum += num;
//   });
//   return sum;
// };

// console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3.

// const phi = 3.14;
// const power = 2;
// let radius = 0;

// const calculateArea = (obj) => {
//   return phi * Math.pow(obj.radius, obj.power);
// };
// radius = 21;
// const area21 = calculateArea({radius, power});
// radius = 7;
// const area7 = calculateArea({radius, power});
// console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
// const makeAjaxRequest = (url, method = 'GET') => {
//     console.log(url, method);
//   };

// makeAjaxRequest('www.google.com');
