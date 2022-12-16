function getMiddle(s) {
  let middlePos = Math.floor(s.length / 2);

  if (s.length % 2 !== 0) {
    return s[middlePos];
  } else {
    return s.slice(middlePos - 1, middlePos + 1);
  }
}
