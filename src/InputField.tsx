import * as React from "react";
import "./styles/app";

interface InputFieldProps {
  value: number | string;
  setCurrentNumbers: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputField({
  value,
  setCurrentNumbers,
}: InputFieldProps) {
  function newNumbers(value: string) {
    setCurrentNumbers((oldValue) => oldValue + value);
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
