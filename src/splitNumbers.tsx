import * as React from "react";

export default function splitNumbers(numbers: string): {
  numbers: string[];
  sign: string;
} {
  console.log("numbers", numbers);
  let newResult: { numbers: string[]; sign: string } = {
    numbers: [],
    sign: "",
  };

  if (numbers.includes("-")) {
    newResult.numbers.push(...numbers.split("-"));
    newResult.sign = "-";
  } else if (numbers.includes("+")) {
    newResult.numbers.push(...numbers.split("+"));
    newResult.sign = "+";
  }

  console.log("result:", newResult);
  /*if (newResult.some((el) => el.includes("+") || el.includes("-"))) {
    return splitNumbers(newResult);
  }*/
  return newResult;
}
