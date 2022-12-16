function rentalCarCost(d) {
  // Your solution here
  //$40 pro Tag
  // >= 7d $50 Rabatt
  // >= 3d $20 Rabatt
  const rentPerDay = 40;
  let sum = 0;

  if (d < 3) {
    sum = rentPerDay * d;
    console.log(sum);
    return sum;
  } else if (d < 7) {
    sum = rentPerDay * d - 20;
    console.log(sum);
    return sum;
  } else if (d >= 7) {
    sum = rentPerDay * d - 50;
    console.log(sum);
    return sum;
  }
}
