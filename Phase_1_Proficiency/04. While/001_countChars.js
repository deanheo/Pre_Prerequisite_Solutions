function countChars(string, character) {
  var count = 0;
  for (var i = 0; i < string.length; i++)
    if (character === string[i]) ++count;
  return count;
}
