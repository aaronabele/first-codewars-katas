function accum(s) {
  const result = [];
  const lowerCase = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    let str = s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += lowerCase[i];
    }
    result.push(str);
  }
  return result.join("-");
}
