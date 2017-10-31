function fib(n) {
  var sum = 1, pre = 0, next;
  for (var i = 0; i < n; i++) {
    next = sum;
    sum += pre;
    pre = next;
  }
  return sum;
}
