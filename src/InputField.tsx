import * as React from "react";
import "./styles/app";

interface InputFieldProps {
  value: number | string;
  inputNumber: React.Dispatch<React.SetStateAction<number | string>>;
  runOperation: React.Dispatch<React.SetStateAction<number | string>>;
  setCurrentNumbers: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  currentNumbers: (number | string)[];
  setCurrentSign: React.Dispatch<React.SetStateAction<number | string>>;
}

export default function InputField({
  value,
  setCurrentNumbers,
  currentNumbers,
  setCurrentSign,
}: InputFieldProps) {
  return (
    <input
      value={value}
      type="button"
      className="app-button"
      onClick={() =>
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "DEL" ||
        value === "="
          ? setCurrentSign(value)
          : setCurrentNumbers([...currentNumbers, value])
      }
    />
  );
}
