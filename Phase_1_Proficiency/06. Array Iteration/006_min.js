function min(array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++)
    if (min > array[i]) min = array[i];
  return min;
}
