function keep(array, condition) {
  var filteredArr = [];
  for (var i = 0; i < array.length; i++)
    if (condition(array[i]))
      filteredArr.push(array[i]);
  return filteredArr;
}
