function countCharacters(string) {
  var result = {};
  for (var i = 0; i < string.length; i++)
    ++result[string[i]] || (result[string[i]] = 1);
  return result;
}
