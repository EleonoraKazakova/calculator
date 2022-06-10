import * as React from "react";
import "./styles/app";
import numbersData from "./data/numbersData.json";
import InputField from "./InputField";

export default function App() {
  const [result, setResult] = React.useState<(string | number)[]>([]);
  const [input, setInput] = React.useState<(string | number)[]>([0]);
  const [currentNumbers, setCurrentNumbers] = React.useState<
    (number | string)[]
  >([]);
  const [currentSign, setCurrentSign] = React.useState<string>("");
  const [showResult, setShowResult] = React.useState<boolean>(false);

  function inputNumber(num: number | string) {
    input[0] === 0 ? input.shift() : null;
    setInput([...input, num]);
  }

  function runOperation(sign: string): void {
    setCurrentSign(sign);

    setInput([]);
    if (result.length > 0 && input.length > 0) {
      calculate(currentSign);
    } else {
      setResult(input);
    }
    console.log("calculate(sign):", calculate(sign));
  }

  function calculate(sign: string): void {
    console.log("result1:", result);
    if (sign === "/") {
      setResult([
        (Number(result.join("")) / Number(input.join(""))).toString(),
      ]);
    } else if (sign === "x") {
      setResult([
        (Number(result.join("")) * Number(input.join(""))).toString(),
      ]);
    } else if (sign === "+") {
      setResult([
        (Number(result.join("")) + Number(input.join(""))).toString(),
      ]);
    } else if (sign === "-") {
      setResult([
        (Number(result.join("")) - Number(input.join(""))).toString(),
      ]);
      setResult([input.join("")]);
    } else if (sign === "=") {
      setResult([
        (Number(result.join("")) + Number(input.join(""))).toString(),
      ]);
    }
  }

  const blockOne = numbersData.allNumbers.map((value: number | string) => (
    <InputField
      value={value}
      runOperation={runOperation}
      inputNumber={inputNumber}
      setCurrentNumbers={setCurrentNumbers}
      currentNumbers={currentNumbers}
      setCurrentSign={setCurrentSign}
    />
  ));

  const reset = () => {
    setInput([0]);
    setResult([]);
    setCurrentSign("");
  };

  console.log("currentNumbers: ", currentNumbers);

  console.log("result: ", result);
  console.log("currentSign: ", currentSign);

  return (
    <div className="app-grid">
      <div></div>
      <div className="app-content">
        <div className="app-display">
          <p>
            {result}
            {currentSign}
            {input.join("")}
          </p>
        </div>

        <div className="app-block-buttons">
          <div className="app-line-buttons">{blockOne}</div>

          <div className="app-line-buttons-long">
            <div className="app-button-long-blue" onClick={reset}>
              RESET
            </div>
            <div
              className="app-button-long-red"
              onClick={() => runOperation("=")}
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
