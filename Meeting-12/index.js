//1. String Literal
let fullName = "John Doe";
let age = 33;
let address = "Manado";

console.log(
  "Halo nama saya " +
    fullName +
    ", Umur saya " +
    age +
    " tahun dan saya tinggal di " +
    address
);

let kalimatDua = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}.`;
console.log(kalimatDua);

//2. Arrow Function
function sayGreetings1(fullName) {
  return `Halo nama saya ${fullName}`;
}
console.log(sayGreetings1("John Doe"));

const sayGreetings2 = (fullName) => {
  return `Halo nama saya ${fullName}`;
};
console.log(sayGreetings1("John Doe"));

// Arrow Function pada IIFE
let output1 = (() => `Hello`)();
console.log(output1);

// Arrow function pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

//3. Default parameter
const sayGreetings3 = (fullName, age, address) => {
  if (!fullName) {
    fullName = "John Doe";
  }
  if (!age) {
    age = 30;
  }
  if (!address) {
    address = "Manado";
  }
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} dan saya tinggal di ${address}.`
  );
};
sayGreetings3();

const sayGreetings4 = (fullName = "John Doe", age = 30, address = "Manado") => {
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} dan saya tinggal di ${address}.`
  );
};
sayGreetings4();

const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });
