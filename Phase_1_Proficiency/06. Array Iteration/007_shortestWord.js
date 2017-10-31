function shortestWord(string) {
  var splitted = string.split(' ');
  var shortest = splitted[0];
  for (var i = 1; i < splitted.length; i++)
    if (shortest.length > splitted[i].length)
      shortest = splitted[i];
  return shortest;
}
