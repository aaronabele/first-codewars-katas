function stairsIn20(s) {
  let sum = 0;
  console.log(s[0][0]);

  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    for (let j = 0; j < element.length; j++) {
      sum += element[j];
    }
  }
  return sum * 20;
}
