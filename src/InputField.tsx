export default function InputField({ setup, state }) {
  const [value, setValue] = state;
  return (
    <input
      value={value}
      type="button"
      onChange={(event) =>
        value === "+"
          ? runOperation(event.currentTarget.value)
          : inputNumber(event.currentTarget.value)
      }
    />
  );
}
