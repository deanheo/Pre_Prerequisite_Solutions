function oddToEven(array) {
  for (var i = 0; i < array.length; i++)
    if (array[i] % 2) array[i] *= 2;
  return array;
}
