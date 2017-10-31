function convertScoreToGradeWithPlusAndMinus(score) {
  if (score > 100 || score < 0) return 'INVALID SCORE';
  if (score >= 90) return score >= 98 ? 'A+' : score <= 92 ? 'A-' : 'A';
  else if (score >= 80) return score >= 88 ? 'B+' : score <= 82 ? 'B-' : 'B';
  else if (score >= 70) return score >= 78 ? 'C+' : score <= 72 ? 'C-' : 'C';
  else if (score >= 60) return score >= 68 ? 'D+' : score <= 62 ? 'D-' : 'D';
  else return 'F';
}
