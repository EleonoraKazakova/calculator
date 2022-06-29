import * as React from "react";
import "./styles/app";
import numbersData from "./data/numbersData.json";
import InputField from "./InputField";
import spliceArr from "./spliceArr";

export default function App() {
  const [result, setResult] = React.useState<(string | number)[]>([]);
  const [currentNumbers, setCurrentNumbers] = React.useState<string[]>([]);
  const [currentSign, setCurrentSign] = React.useState<string>("");
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [firstNumber, setFirstNumber] = React.useState<(number | string)[]>([]);
  const [secondNumber, setSecondNumber] = React.useState<(number | string)[]>(
    []
  );

  function runOperation(): void {
    currentNumbers.map((str) => str.split("+"));
    let outcome;
    switch (currentSign) {
      case "+":
        outcome = Number(currentNumbers[0]) + Number(currentNumbers[1]);
        setResult([outcome]);
        setShowResult(!showResult);
        break;
      case "-":
        outcome = Number(currentNumbers[0]) - Number(currentNumbers[1]);
        setResult([outcome]);
        setShowResult(!showResult);
        break;
      case "*":
        outcome = Number(currentNumbers[0]) * Number(currentNumbers[1]);
        setResult([outcome]);
        setShowResult(!showResult);
        break;
      case "x":
        outcome = Number(currentNumbers[0]) * Number(currentNumbers[1]);
        setResult([outcome]);
        setShowResult(!showResult);
        break;
      case "/":
        outcome = Number(currentNumbers[0]) / Number(currentNumbers[1]);
        setResult([outcome]);
        setShowResult(!showResult);
        break;
      case "DEL":
        outcome = Number(currentNumbers[0]) / Number(currentNumbers[1]);
        setResult([outcome]);
        setShowResult(!showResult);
        break;
    }
  }

  const blockOne = numbersData.allNumbers.map((value: number | string) => (
    <InputField
      value={value}
      setCurrentNumbers={setCurrentNumbers}
      currentNumbers={currentNumbers}
      setCurrentSign={setCurrentSign}
      setFirstNumber={setFirstNumber}
      setSecondNumber={setSecondNumber}
    />
  ));

  const reset = () => {
    setResult([]);
    setCurrentSign("");
    setCurrentNumbers([]);
    setShowResult(!showResult);
  };

  console.log("currentNumbers: ", currentNumbers);
  console.log("firstNumber: ", firstNumber);
  console.log("secondNumber: ", secondNumber);
  console.log("result: ", result);
  console.log("currentSign: ", currentSign);

  return (
    <div className="app-grid">
      <div></div>
      <div className="app-content">
        <div className="app-display">
          <div>
            {currentNumbers.length === 0 ? 0 : null}
            {showResult ? (
              result
            ) : (
              <>
                {currentNumbers[0]} {currentSign} {currentNumbers[1]}
              </>
            )}
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
