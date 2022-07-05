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
  } else if (numbers.includes("/")) {
    newResult.numbers.push(...numbers.split("/"));
    newResult.sign = "/";
  } else if (numbers.includes("DEL")) {
    newResult.numbers.push(...numbers.split("DEL"));
    newResult.sign = "DEL";
  } else if (numbers.includes("*")) {
    newResult.numbers.push(...numbers.split("*"));
    newResult.sign = "*";
  } else if (numbers.includes("x")) {
    newResult.numbers.push(...numbers.split("x"));
    newResult.sign = "x";
  }

  console.log("result:", newResult);

  return newResult;
}
