function splitNumbers(d) {
  let result = [];
  for (let num of d) {
    if (num.includes("-")) {
      result.push(...num.split("-"));
    } else if (num.includes("+")) {
      result.push(...num.split("+"));
    } else {
      result.push(num);
    }
  }

  console.log("result:", result);
  if (result.some((el) => el.includes("+") || el.includes("-"))) {
    return splitNumbers(result);
  }
  return result;
}
