function evenNumbers(array, number) {
  // good luck
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) result.push(array[i]);
  }
  return result.splice(result.length - number, number);
}
