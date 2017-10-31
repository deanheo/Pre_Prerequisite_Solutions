function removeOddValues(object) {
  for (var i in object) {
    if (typeof(object[i]) === "number")
      if (object[i] % 2) delete object[i];
  }
  return object;
}
