function highAndLow(numbers) {
  let numbersToArray = numbers.split(" ");

  function compareNumbers(a, b) {
    return b - a;
  }

  const sortedNumbers = numbersToArray.sort(compareNumbers);

  for (let i = 0; i < sortedNumbers.length; i++) {
    return sortedNumbers[0] + " " + sortedNumbers[sortedNumbers.length - 1];
  }
}
