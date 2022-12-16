function maskify(cc) {
  const newArray = [];
  let str = "#";
  let creditCard = "";

  if (cc.length > 1) {
    for (let i = 0; i < cc.length - 4; i++) {
      creditCard += "#";
    }
    return creditCard + cc.slice(-4);
  } else {
    return cc;
  }
}
