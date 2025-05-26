const details = require("./utils");

const info = require("./utils");

const person = {
  name: "Yuelha",
  age: 19,
  hobbies: ["crochet", "game", "drama"],
};

// named import 
console.log(info.details(person));
// // defualt export 
// console.log (details(person))