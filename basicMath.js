function basicOp(operation, value1, value2) {
  let sum = 0;

  if (operation === "+") {
    sum = value1 + value2;
    console.log(sum);
    return sum;
  } else if (operation === "-") {
    sum = value1 - value2;
    console.log(sum);
    return sum;
  } else if (operation === "*") {
    sum = value1 * value2;
    console.log(sum);
    return sum;
  } else if (operation === "/") {
    sum = value1 / value2;
    console.log(sum);
    return sum;
  }
}
