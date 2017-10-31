function clean(object) {
  for (var i in object)
    if (i[0] === '_') delete object[i];
  return object;
}
