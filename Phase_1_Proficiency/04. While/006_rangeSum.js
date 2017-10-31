function sum(start, end) {
  var result = 0;
  if (start > end) {
    var temp = start;
    start = end;
    end = temp;
    // [start, end] = [end, start]; // es6
  }
  for (var i = start; i <= end; i++)
    result += i;
  return result;
}
