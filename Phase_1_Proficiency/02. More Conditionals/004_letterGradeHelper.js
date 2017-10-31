function letterGrade(letter, score) {
  if (score % 10 >= 8) return letter + '+';
  else if (score % 10 <= 2) return letter + '-';
  return letter;
}
