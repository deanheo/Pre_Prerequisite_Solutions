function modulo(num, num2) {
  var remainder = 0;
  if (Math.abs(num) > 0) {
    var quotient = Math.floor(Math.abs(num) / Math.abs(num2));
    remainder = Math.abs(num) - (Math.abs(num2) * quotient);
  }
  if (num < 0) remainder = -1 * remainder;
  return remainder;
}
