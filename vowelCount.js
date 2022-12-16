function getCount(str) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      console.log(true);
      counter += 1;
      console.log(counter);
    }
  }
  return counter;
}
