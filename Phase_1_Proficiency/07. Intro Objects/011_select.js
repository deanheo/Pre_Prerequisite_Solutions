function select(object, array) {
  var result = {};
  for (var i = 0; i < array.length; i++)
    if (object[array[i]])
      result[array[i]] = object[array[i]];
  return result;
}
