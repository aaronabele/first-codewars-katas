function bmi(weight, height) {
  let currentBmi = weight / height / height;

  if (currentBmi <= 18.5) {
    return "Underweight";
  } else if (currentBmi <= 25.0) {
    return "Normal";
  } else if (currentBmi <= 30.0) {
    return "Overweight";
  } else if (currentBmi > 30.0) {
    return "Obese";
  }
}
