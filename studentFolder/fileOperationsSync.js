// const fs = require("node:fs");
// try {
//     fs.writeFileSync("notes.txt", "This is my first note in the notes txt")

// } catch (error) {
//     console.log(error);
// }

// // append file
// try {
//     fs.appendFileSync("notes.txt", "\nAdding another line to my notes \nHy there slowly i am getting hang of it T_T but its hard bruhhh",)

// } catch (err) {
//     console.log(err);
// }

// try {
//     const detials= fs.readFileSync("notes.txt", "utf-8");
//     console.log(detials);
// } catch (problem) {
//     console.log(problem);
// }

// // // delete a file
// //  try {
// //     fs.unlinkSync("notes.txt");
// //  } catch (prob) {
// //     console.log(prob);
// //  }

// //  delete folder

// fs.rmdirSync("studentFolder", (err)=>{
//     console.log(err);
// });

const fs = require("node:fs");

try {
  fs.mkdirSync("StudentFolder");
  fs.writeFileSync("notes.txt", "This is my first note in the notes txt");
  fs.appendFileSync(
    "notes.txt",
    "\nAdding another line to my notes \nHy there slowly i am getting hang of it T_T but its hard bruhhh"
  );

  
  const detials = fs.readFileSync("notes.txt", "utf-8");
  console.log(detials);
  fs.unlinkSync("notes.txt");
  fs.rmdirSync("studentFolder");
} catch (problem) {
  console.log(problem);
}
