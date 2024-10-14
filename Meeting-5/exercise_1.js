function BMICalc(weight, height){
   BMI = weight / (height * height);
   return BMI
}

let output = BMICalc(90, 1.8);
console.log(output);