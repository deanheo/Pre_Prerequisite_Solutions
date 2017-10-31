function onlyEvenElements(array) {
  var result = [];
  for (var i = 0; i < array.length; i++)
    if (!(array[i] % 2)) result.push(array[i]);
  return result;
}
