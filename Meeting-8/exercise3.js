let person = {
  firstName: "John Doe",
  weight: 75,
  height: 1.8,
  bmiCalculation: function () {
    bodyMass = this.weight / (this.height * this.height);
    return bodyMass;
  },
};

let output = person.bmiCalculation();

function bmiInformation(output) {
  if (output < 16) {
    return "Severely Underweight";
  } else if (output >= 16 && output < 18.5) {
    return "Underweight";
  } else if (output >= 18.5 && output < 25) {
    return "Normal";
  } else if (output >= 25 && output < 30) {
    return "Overweight";
  } else if (output >= 30 && output < 35) {
    return "Moderately Obese";
  } else if (output >= 35 && output < 40) {
    return "Severely Obese";
  } else if (output >= 40) {
    return "Morbidly Obese";
  }
}

let bodyMassIndex = bmiInformation(output);

person["bodyMassIndex"] = bodyMassIndex;
console.log(person);
