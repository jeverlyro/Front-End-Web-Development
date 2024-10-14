//ARRAY EXERCISES

let people = ["Greg", "Mary", "Devon", "James"];

//Number one
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//Number two
people.forEach(function (item) {
  console.log(item);
});

//Number three
people.shift();
console.log(people);

//Number four
people.pop();
console.log(people);

//Number five
people.unshift("Matt");
console.log(people);

//Number six
people.push("Kadek");
console.log(people);

//Number seven
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

//Number eight
let newPeople = people.slice(1);
console.log(newPeople);

//Number nine
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//Number ten
let withBob = people.concat("Bob");
console.log(withBob);

//OBJECT EXERCISES

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//Number one
programming.languages.push("Go");
console.log(programming.languages);

//Number two
programming["difficulty"] = 7;
console.log(programming.difficulty);

//Number three
delete programming.jokes;
console.log(programming);

//Number four
programming.isFun = true;
console.log(programming);

//Number five
programming.languages.map((language, index) => {
  console.log(`${index} - ${language}`);
});
