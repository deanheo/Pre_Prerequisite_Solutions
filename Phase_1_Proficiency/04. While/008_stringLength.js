function stringLength(string) {
  var i = 0, length = 0;
  while (string[i] !== undefined) {
    ++length;
    ++i;
  }
  return length;
}
