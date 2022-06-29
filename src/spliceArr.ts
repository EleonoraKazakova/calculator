import * as React from "react";
import "./styles/app";

export default function spliceArr(
  currentNumbers: (number | string)[],
  setFirstNumber: React.Dispatch<React.SetStateAction<(number | string)[]>>,
  setSecondNumber: React.Dispatch<React.SetStateAction<(number | string)[]>>
) {
  let firstNum;
  let secondNum;

  currentNumbers.map((el) => {
    switch (el) {
      case "+":
        firstNum = currentNumbers.splice(0, currentNumbers.indexOf("+"));
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("+") + 1,
          currentNumbers.length
        );
        break;
      case "-":
        firstNum = currentNumbers.splice(0, currentNumbers.indexOf("-"));
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("-") + 1,
          currentNumbers.length
        );
        break;
      case "*":
        firstNum = currentNumbers.splice(0, currentNumbers.indexOf("*"));
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("*") + 1,
          currentNumbers.length
        );
        break;
      case "x":
        firstNum = currentNumbers.splice(0, currentNumbers.indexOf("x"));
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("x") + 1,
          currentNumbers.length
        );
        break;
      case "/":
        firstNum = currentNumbers.splice(0, currentNumbers.indexOf("/"));
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("/") + 1,
          currentNumbers.length
        );
        break;
      case "DEL":
        firstNum = currentNumbers.splice(0, currentNumbers.indexOf("DEL"));
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("DEL") + 1,
          currentNumbers.length
        );
        break;
    }
  });

  /* currentNumbers.map((el) => {
    switch (el) {
      case "+":
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("+") + 1,
          currentNumbers.length
        );
        break;
      case "-":
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("-") + 1,
          currentNumbers.length
        );
        break;
      case "*":
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("*") + 1,
          currentNumbers.length
        );
        break;
      case "x":
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("x") + 1,
          currentNumbers.length
        );
        break;
      case "/":
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("/") + 1,
          currentNumbers.length
        );
        break;
      case "DEL":
        secondNum = currentNumbers.splice(
          currentNumbers.indexOf("DEL") + 1,
          currentNumbers.length
        );
        break;
    }
  });*/
  console.log("currentNumbers2:", currentNumbers);
  console.log("firstNum:", firstNum);
  console.log("secondNum:", secondNum);

  setFirstNumber(firstNum);
  setSecondNumber(secondNum);
}
