function average(array) {
  var sum = 0;
  for (var i = 1; i < array.length; i++)
    sum += array[i];
  return Math.round(sum / array.length);
}
