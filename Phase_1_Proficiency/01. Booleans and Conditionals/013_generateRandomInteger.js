function generateRandomInteger(num) {
  if (num === 0) return 0;
  if (num < 0) return false;
  return Math.round(Math.random() * num);
}
