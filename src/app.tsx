import * as React from "react";
import "./styles/app";
import numbersData from "./data/numbersData.json";
import InputField from "./InputField";

export default function App() {
  const [result, setResult] = React.useState<(string | number)[]>([]);
  const [input, setInput] = React.useState<(string | number)[]>([0]);
  const [currentSign, setCurrentSign] = React.useState<string>("");

  function inputNumber(num: number | string) {
    input[0] === 0 ? input.shift() : null;
    setInput([...input, num]);
  }

  function runOperation(sign: string) {
    setCurrentSign(sign);
    setInput([]);
    if (result.length > 0 && input.length > 0) {
      setResult([calculate(currentSign)]);
    } else {
      setResult(input);
    }
    console.log("calculate(sign):", calculate(sign));
  }

  const calculate = (sign: string): number => {
    if (sign === "/") {
      return Number(result.join("")) / Number(input.join(""));
    } else if (sign === "x") {
      return Number(result.join("")) * Number(input.join(""));
    } else if (sign === "+") {
      return Number(result.join("")) + Number(input.join(""));
    } else if (sign === "-") {
      return Number(result.join("")) - Number(input.join(""));
    } else if (sign === "=") {
      return Number(result);
    }
  };

  const blockOne = numbersData.allNumbers.map((value: number | string) => (
    <InputField
      value={value}
      runOperation={runOperation}
      inputNumber={inputNumber}
    />
    /*<input
      type="button"
      value={el}
      className="app-button"
      onClick={(event) =>
        el === "+"
          ? runOperation(event.currentTarget.value)
          : inputNumber(event.currentTarget.value)
      }
    />*/
  ));

  const reset = () => {
    setInput([0]);
    setResult([]);
    setCurrentSign("");
  };

  console.log("1: ", result);
  console.log("2: ", input);
  console.log("sign: ", currentSign);

  return (
    <div className="app-grid">
      <div></div>
      <div className="app-content">
        <div className="app-display">
          <p>
            {result.join("")}
            {currentSign}
            {input.join("")}
          </p>
        </div>

        <div className="app-block-buttons">
          <div className="app-line-buttons">{blockOne}</div>

          <div className="app-line-buttons">
            <div className="app-button" onClick={() => inputNumber(4)}>
              4
            </div>
            <div className="app-button" onClick={() => inputNumber(5)}>
              5
            </div>
            <div className="app-button" onClick={() => inputNumber(6)}>
              6
            </div>
            <div className="app-button" onClick={() => runOperation("+")}>
              +
            </div>
          </div>

          <div className="app-line-buttons">
            <input
              type="button"
              value={1}
              className="app-button"
              onClick={(event) => inputNumber(event.currentTarget.value)}
            />

            <div className="app-button" onClick={() => inputNumber(2)}>
              2
            </div>
            <div className="app-button" onClick={() => inputNumber(3)}>
              3
            </div>
            <div className="app-button" onClick={() => runOperation("-")}>
              -
            </div>
          </div>

          <div className="app-line-buttons">
            <div className="app-button" onClick={() => inputNumber(".")}>
              .
            </div>
            <div className="app-button" onClick={() => inputNumber(0)}>
              0
            </div>
            <div className="app-button">DEL</div>
            <div className="app-button" onClick={() => runOperation("x")}>
              x
            </div>
          </div>

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
