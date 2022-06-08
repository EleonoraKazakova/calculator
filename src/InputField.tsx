import * as React from "react";
interface InputFieldProps {
  value: number | string;
  inputNumber: React.Dispatch<React.SetStateAction<number | string>>;
  runOperation: React.Dispatch<React.SetStateAction<number | string>>;
}

export default function InputField({
  value,
  inputNumber,
  runOperation,
}: InputFieldProps) {
  console.log(value);
  return (
    <input
      value={value}
      type="button"
      onClick={() =>
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "DEL"
          ? runOperation(value)
          : inputNumber(value)
      }
    />
  );
}
