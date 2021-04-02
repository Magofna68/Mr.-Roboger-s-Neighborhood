
//                            Business Logic:
const beep = "Beep!";
const boop = "Boop!";
const neighbor = "Wont you be my neighbor?";

let indexNumber = function (inputText) {
  let numberArray = [];
  for (let i = 0; i <= inputText; i++) {
    numberArray.push(i.toString());
  }

  let textOutput = numberArray.map(function (input) {
    if (input.includes("2" && "3")) {
      return input = neighbor;
    } else if (input.includes("1" && "3")) {
      return input = neighbor;
    } else if (input.includes("1" && "2")) {
      return input = boop;
    } else if (input.includes("3")) {
      return input = neighbor;
    } else if (input.includes("2")) {
      return input = boop;
    } else if (input.includes("1")) {
      return input = beep;
    } else {
      return input;
    }
  });
  return textOutput;
};

//                                    UI Logic:

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let inputText = parseInt($("#inputText").val());
    var result = indexNumber(inputText);
    $("#results").text(result);
    $(".output").show();
  });
});

// Prior Attempts:

// if (input.includes("1")) {
  //   return input = beep;
  // } else if (input.includes("1" && "2")) {
    //   return input = boop;
    // } else if (input.includes("2")) {
      //   return input = boop;
      // } else if (input.includes("1" && "3")) {
        //   return input = neighbor;
        // } else if (input.includes("2" && "3")) {
          //   return input = neighbor;
          // } else if (input.includes("3")) {
            //   return input = neighbor;
            // } else {
              //   return input;


              // $(document).ready(function () {
              //   $("#number-input").submit(function (event)) {
              // event.preventDefault();

              //     ().onclick()
              // const numberInput = parseInt($("#number-input").val());
              // const numberInput = document.getElementById("number-input").value;