import * as React from "react";
import "./styles/app";
import numbersData from "./data/numbersData.json";
import InputField from "./InputField";
import splitNumbers from "./splitNumbers";

export default function App() {
  const [result, setResult] = React.useState<number>(0);
  const [currentNumbers, setCurrentNumbers] = React.useState<string>("");
  const [currentSign, setCurrentSign] = React.useState<string>("");
  const [showResult, setShowResult] = React.useState<boolean>(false);

  function runOperation(): void {
    const newResult: { numbers: string[]; sign: string } =
      splitNumbers(currentNumbers);

    switch (newResult.sign) {
      case "+":
        setResult(Number(newResult.numbers[0]) + Number(newResult.numbers[1]));
        setShowResult(true);
        break;
      case "-":
        setResult(Number(newResult.numbers[0]) - Number(newResult.numbers[1]));
        setShowResult(true);
        break;
      case "*":
        setResult(Number(newResult.numbers[0]) * Number(newResult.numbers[1]));
        setShowResult(true);
        break;
      case "x":
        setResult(Number(newResult.numbers[0]) * Number(newResult.numbers[1]));
        setShowResult(true);
        break;
      case "/":
        setResult(Number(newResult.numbers[0]) / Number(newResult.numbers[1]));
        setShowResult(true);
        break;
      case "DEL":
        setResult(Number(newResult.numbers[0]) / Number(newResult.numbers[1]));
        setShowResult(true);
        break;
    }
  }

  const blockOne = numbersData.allNumbers.map((value: number | string) => (
    <InputField
      key={value}
      value={value}
      setCurrentNumbers={setCurrentNumbers}
    />
  ));

  const reset = () => {
    setResult(0);
    setCurrentSign("");
    setCurrentNumbers("");
    setShowResult(false);
  };

  console.log("currentNumbers: ", currentNumbers);

  console.log("result: ", result);
  console.log("currentSign: ", currentSign);

  return (
    <div className="app-grid">
      <div></div>
      <div className="app-content">
        <div className="app-display">
          <div>
            {currentNumbers.length === 0 ? 0 : null}
            {showResult ? result : currentNumbers}
          </div>
        </div>

        <div className="app-block-buttons">
          <div className="app-line-buttons">{blockOne}</div>

          <div className="app-line-buttons-long">
            <div className="app-button-long-blue" onClick={reset}>
              RESET
            </div>
            <div className="app-button-long-red" onClick={() => runOperation()}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
