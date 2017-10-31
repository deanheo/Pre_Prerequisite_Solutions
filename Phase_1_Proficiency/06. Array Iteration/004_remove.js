function remove(array, element) {
  var filteredArr = [];
  for (var i = 0; i < array.length; i++)
    if (element !== array[i])
      filteredArr.push(array[i]);
  return filteredArr;
}

// function remove(array, element) {
//   var filteredAry = array.filter(function(e) { return e !== element })
//   return filteredAry;
// }
