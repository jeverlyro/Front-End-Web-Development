let output = function (berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
}(84, 1.9);
console.log(output);

function bmiCalculation (berat2, tinggi2, callback) {
    let bmi = berat2 / (tinggi2 * tinggi2);
    callback(bmi);
}

let berat2 = 90;
let tinggi2 = 1.7;

let output2 = bmiCalculation (berat2, tinggi2, function (output) {
    console.log(output);
});