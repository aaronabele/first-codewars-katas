function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let counter = 0;
  for (i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) counter += 1;
  }
  return counter;
}
