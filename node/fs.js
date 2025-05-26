// // // // using fs module
// // // // create a file
// // // // write to a file
// // // // read from a file
// // // // create a folder
// // // // delate a file
// // // // delete a folder

// // // // async fs module

// const fs = require("node:fs"); //copyin g the node fs module
// fs.writeFile(
//   "yuelha.txt",
//   "heloo this is yuelha from async fs module",
//   (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       // file written successfully
//     }
//   }
// );

// // // // sync
// // // try {
// // //   fs.writeFileSync("Oizys.txt", "hello this is Oizys form sync fs module");
// // //   // file written successfully
// // // } catch (err) {
// // //   console.error(err);
// // // }

// // // // Appending Files:
// // // // append file async
// // // fs.appendFile(
// // //   "yuelha.txt",
// // //   "\nI am 19 years old \nmoved to bumthang at year 2009",
// // //   (err) => {
// // //     if (err) {
// // //       console.error(err);
// // //     } else {
// // //       // file written successfully
// // //     }
// // //   }
// // // );

// // // //   append file sync
// // // fs.appendFileSync("Oizys.txt", "\nI am 20 years old", (err) => {
// // //   if (err) {
// //     console.error(err);  use try catch for 
// // //   } else {
// // //     // file written successfully
// // //   }
// // // });
// // // // append file done

// // // //   create a folder mannually and move yuelha.txt to that folder
// // // fs.writeFile("./new/yuelha.txt", "\nthis is a new folder", (err) => {
// // //   if (err) {
// // //     console.error(err);
// // //   } else {
// // //     // file written successfully
// // //   }
// // // });

// // // try {
// // //   fs.writeFileSync(
// // //     "./new/Oizys.txt",
// // //     "hello this is Oizys form sync fs module"
// // //   );
// // //   // file written successfully
// // // } catch (err) {
// // //   console.error(err);
// // // }

// // // fs.appendFile("./new/yuelha.txt", "\n yoii wassup \n Broskiesssssss gachi bay dho cc mana", (err) => {
// // //   if (err) {
// // //     console.error(err);
// // //   } else {
// // //     // file written successfully
// // //   }
// // // });

// // // fs.appendFileSync(
// // //   "./new/Oizys.txt",
// // //   "\n Bruh les go homeee \n nga guto naw may brooo jo go no ye chim a shu ba ray to rot in the bed \n slayyyy T_T!",
// // //   (err) => {
// // //     if (err) {
// // //       console.error(err);
// // //     } else {
// // //       // file written successfully
// // //     }
// // //   }
// // // );

 const fs = require("node:fs");

//  read a file

// // fs.readFile("yuelha.txt", "utf-8", (err, data) => {
// //   if (err) {
// //     console.log(err);
// //     return;
// //   }
// // });

// // try {
// //   const data = fs.readFileSync("yuelha.txt", "utf-8");
// //   console.log(data);
// // } catch (error) {
// //   console.log(error);
// // };

// // fs.readFile("Oizys.txt", "utf-8", (err, data) => {
// //     if (err) {
// //       console.log(err);
// //       return;
// //     }
// //   });

// //   try {
// //     const data = fs.readFileSync("Oizys.txt", "utf-8");
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //   }

// const combineFile = require("./combineFile");

// const content = "\nShe went to hongkong"
// const fileName = "yuelha.txt";
// //1. read the content
// //2. append and write the content

// combineFile.appendContentWithDate(fileName, "utf-8", content, (type, err) => {
//   console.log(type);
//   console.log(err);
// });

// delete a file

// fs.unlink("yuelha.txt", (err) => {
//   if(err) {
//     console.log(err);
//   }
// });

// try{
//   fs.unlinkSync("Oizys.txt");
// } catch(err){
//   console.log(err);
// }

// create folder

// fs.mkdir("path", (err)=>{
//   if (err){
//     console.log(err)
//   }
// });

// try{
//   fs.mkdirSync("path1");
// }catch(err){
//   console.log(err)
// }


// create folder nested folder use recursive true options for that 

// fs.mkdir("path/to/my/file",{recursive: true} (err)=>{
//   if (err){
//     console.log(err)
//   }
// });

// to check weather the file exist or not

// const isExisting= fs.existsSync("yuelha.txt");
// console.log(isExisting);

// delete a folder
// fs.rm("path", {recursive: true}, (err) => {
//   console.log(err);
// });//this is to remove the nested folder

fs.rmdir("path1", (err) => {
  console.log(err);
});

try {
  fs.rmdirSync("path1");
} catch (error) {
  console.log(error);
}