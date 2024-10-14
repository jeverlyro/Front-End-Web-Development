// I Kadek Tresna Jeverly

const calculateAge = (birthYear) => 2019 - birthYear;
export { calculateAge as hitungUmur };

import { hitungUmur } from "./exercise8.js";

const yearUntilRetirement = ({ year, firstName }) => {
  const age = hitungUmur(year);
  const retirement = 60 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

export { yearUntilRetirement as retirementCalculator };

const addNumber = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

export { addNumber as sumNumbers };

const phi = 3.14;
const power = 2;

const calculateArea = ({ radius, power }) => {
  return phi * Math.pow(radius, power);
};

export { calculateArea as hitungArea, phi as PI, power as exponent };

const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};

export { makeAjaxRequest as sendRequest };

import { retirementCalculator } from "./exercise8.js";
import { sumNumbers } from "./exercise8.js";
import { hitungArea, PI, exponent } from "./exercise8.js";
import { sendRequest } from "./exercise8.js";

retirementCalculator({ year: 1987, firstName: "John" });

console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7));

let radius = 21;
const area21 = calculateArea({ radius, power: exponent });
radius = 7;
const area7 = calculateArea({ radius, power: exponent });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

sendRequest("www.google.com");
