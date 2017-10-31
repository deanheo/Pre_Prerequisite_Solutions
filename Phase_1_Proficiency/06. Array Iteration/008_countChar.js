function countChar(string, char) {
  var count = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++)
    if (string[i] === char)
      ++count;
  return count;
}
