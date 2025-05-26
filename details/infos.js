console.log("hello from js file");

let students = [
  {
    name: "Donshinang",
    age: 100,
    address: "Jakar triplet tree",
    hobbies: ["watching", "scaring", "staying still"],
    bio: "he or she is a dead person and it likes to affect some people with less aura energy",
  },
  {
    name: "Tenzin",
    age: 23,
    address: "Yuagharling",
    hobbies: ["drama", "dancing", "sleeping"],
    bio: "she is from Bumthang she like to watch drama, travel,and sleep ",
  },
  {
    name: "Galey",
    age: 22,
    address: "Yuagharling",
    hobbies: ["games", "outdoor game", "travel"],
    bio: "he is from Bumthang and he likes playing games and likes to hike",
  },
  {
    name: "Sonam",
    age: 23,
    address: "LamaGonpa",
    hobbies: ["games", "sleep", "crafts"],
    bio: "he is from Bumthang and he like to play onilne games and likes to make some random stuffs,loves sleeing ",
  },
  {
    name: "Kuenzang",
    age: 23,
    address: "Pongkhar",
    hobbies: ["tiktok", "game", "hike"],
    bio: "he is from Bumthang and he loves going live in tiktok and entertain others and himself",
  },
];
// higher order function for array is a fucntion thst can have an anonymous function

function submit() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  const mySelect = document.getElementById("option");
  const selectValue = mySelect.value;

  if (!name) {
    alert("Please enter the name");
    return;
  }

  if (selectValue === "Select one") {
    alert("select either age, address, bio, hobbies");
    return;
  }

  const student = students.find(function (item) {
    if (name === item.name) {
      return true;
    } else {
      return false;
    }
  });

  if (!student) {
    alert(`No student found with the name ${name}`);
    return;
  }

  switch (selectValue) {
    case "Age":
      alert(`${name} is ${student.age} years old`);
      break;

    case "Address":
      alert(`${name} lives ${student.address}`);
      break;

    case "Hobbies":
      alert(`${name} likes ${student.hobbies}`);
      break;

    case "Bio":
      alert(`${name}, ${student.bio}`);
      break;

    default:
      alert(
        `${name} lives in ${student.address} and is ${student.age} years old and likes ${student.hobbies} and ${student.bio} `
      );
  }
}

// if (selectValue === "Age") {
//   alert(`${name} is ${student.age} years old`);
//   return;
// } else if (selectValue === "Address") {
//   alert(`${name} is from ${student.address}`);
//   return;
// } else {
//   alert(`${name} is from ${student.address} and is ${student.age} years old`);
//   return;
// }
//   if (selectValue === "Address") {
//     alert(`${name} is from ${student.address}`);
//     return;
//   }

//   if (selectValue === "Both") {
//     alert(
//       ` ${name} is from ${student.address} and is ${student.age} years old `
//     );
//     return;
//   }
