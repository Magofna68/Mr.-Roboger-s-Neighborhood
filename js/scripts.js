$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    const numberInput = document.getElementById("#numberInput").value;
    const numberArray = ["1", "2", "3"] {
      if 
    }


    function inputArray(numberInput) {
      for (let i = 0; i <= numberInput.length; i++) {
        if (numberInput === 1) {
          return "Beep!";
        } else if (numberInput === 2) {
          return "Boop!";
        } else if (numberInput === 3) {
          return "Won't you be my neighbor?";
        }
        return undefined
      }
    }
  }
const number = 