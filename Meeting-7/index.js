//Array in Javascript
//Deklarasi Array

//1. Array literal
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

//Tipe data apa saja yang bisa disimpan dalam Array
//let numbers = [1, 2, 3, 4, 5];
let students = ["John", "Jane", "Bob"];
let john = ["John", 30, true, [80, 90, 100]];
console.log(john);

//Array length
console.log(numbers.length);
console.log(students.length);
console.log(john.length);

//Cara mengakses elemen/data tertentu dalam Array
//Melalui index array. Index selalu dimulai dari 0
console.log(numbers[2]);
console.log(students[1]);
console.log(john[2]);
console.log(john[3][1]);

//Mengakses element/data terakhir dalam Array
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers2[numbers2.length - 1]);

let array = [1, 2, 3, "Hello", false, true];
console.log(array);

//1. toString
console.log(array.toString());

//2. Join
console.log(array.join(" "));

//3. Pop
console.log(array.pop());

//4. Push
array.push("Selamat pagi");
console.log(array);

//5. Shift
array.shift();
console.log(array);

//6. Unshift
array.unshift("Selamat pagi");
console.log(array);

//7. Splice
array.splice(2, 1);
console.log(array);

array.splice(1, 1, 1);
console.log(array);

array.splice(2, 0, 2, 3);
console.log(array);

//8. Concat
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. Slice
let sayuran = makanan.slice(3, 6);
console.log(sayuran);

let bijian = makanan.slice(6);
console.log(bijian);

//10.
