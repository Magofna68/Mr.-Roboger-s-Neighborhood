// $(document).ready(function () {
//   $("#number-input").submit(function (event)) {
// event.preventDefault();

//     ().onclick()
// const numberInput = parseInt($("#number-input").val());
// const numberInput = document.getElementById("number-input").value;

const beep = "beep!";
const boop = "boop!";
const neighbor = "wont you be my neighbor?";

let indexNumber = function (inputText) {
  let numberArray = [];
  for (let i = 0; i <= inputText; i++) {
    numberArray.push.toString(i);
  }
  console.log(numberArray);
}
//       return "Beep!";
//     } else if (numberInput.includes("2")) {
//       return "Boop!";
//     } else if (numberInput.includes("3")) {
//       return "Won't you be my neighbor?";
//     }
//     return numberInput;
//   }
//   function inputArray() {

//   }
//   //   });
// });
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let inputText = parseInt($("#inputText").val());
    var result = indexNumber(inputText);
    $("#demo").text(result);
  });
});