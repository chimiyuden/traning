// const colorPicker = document.getElementById("colorPicker");
// const changeButton = document.getElementById("changeButton");
// changeButton.addEventListener("click", () => {
//   document.body.style.backgroundColor = colorPicker.value;
// });

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  button.style.backgroundColor = "pink";
  button.style.color = " white";

  button.addEventListener("click", function () {
    console.log("Button Clicked");
  });
});

document.addEventListener("dblclick", function () {
  console.log("Double Click");
});

document.addEventListener("click", function () {
  console.log("click");
});

function colorChange() {
  let myColor = document.getElementById("colorPicker");
  let colorValue = myColor.value;
  document.body.style.backgroundColor = colorValue;
}
