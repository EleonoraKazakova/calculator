import * as React from "react";
import "./styles/app";
import spliceArr from "./spliceArr";

interface InputFieldProps {
  value: number | string;
  //inputNumber: React.Dispatch<React.SetStateAction<number | string>>;
  //runOperation: React.Dispatch<React.SetStateAction<number | string>>;
  setCurrentNumbers: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  currentNumbers: (number | string)[];
  setCurrentSign: React.Dispatch<React.SetStateAction<number | string>>;
  setFirstNumber: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  setSecondNumber: React.Dispatch<React.SetStateAction<(number | string)[]>>;
}

export default function InputField({
  value,
  setCurrentNumbers,
  currentNumbers,
  setCurrentSign,
  setFirstNumber,
  setSecondNumber,
}: InputFieldProps) {
  function newNumbers(value: string) {
    const currentStr = [...currentNumbers, value];
    setCurrentNumbers((oldValeu) => [oldValeu + value]);
    //spliceArr(currentNumber, setFirstNumber, setSecondNumber);
  }

  return (
    <input
      value={value}
      type="button"
      className="app-button"
      onClick={(event) => newNumbers(event.currentTarget.value)}
    />
  );
}
