function isIsogram(str) {
  let strLower = "";

  for (let item of str) {
    strLower = str.toLocaleLowerCase();
  }

  let withoutDuplicates = Array.from(new Set(strLower));

  console.log(withoutDuplicates);
  if (str.isEmpty) {
    return true;
  } else {
    for (let item of withoutDuplicates) {
    }
    if (strLower.length !== withoutDuplicates.length) {
      return false;
    } else if (strLower.length === withoutDuplicates.length) {
      return true;
    }
  }
}
