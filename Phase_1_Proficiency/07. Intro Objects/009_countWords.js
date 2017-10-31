function countWords(string) {
  var result = {};
  var splitted = string.split(' ');
  for (var i = 0; i < splitted.length; i++)
    ++result[splitted[i]] || (result[splitted[i]] = 1);
  return result;
}

function countWordsCaseInsensitive(string) {
  var result = {};
  string = string.toLowerCase();
  var splitted = string.split(' ');
  for (var i = 0; i < splitted.length; i++)
    ++result[splitted[i]] || (result[splitted[i]] = 1);
  return result;
}
