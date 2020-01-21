function fibonacciGenerator(n) {
  var fib = [];

  for(var i = 0; i < n; i++) {
    if (i < 2) {
      fib.push(i);
    }else {
      fib.push(fib[i-1] + fib[i-2]);
    }
  }
  return fib;
}
