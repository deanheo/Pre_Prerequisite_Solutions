function longestWord(string) {
  var splitted = string.split(' ');
  var longest = splitted[0];
  for (var i = 1; i < splitted.length; i++)
    if (longest.length < splitted[i].length)
      longest = splitted[i];
  return longest;
}
