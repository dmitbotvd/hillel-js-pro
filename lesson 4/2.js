function factorial(n){
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let res = factorial(4);
console.log(res);
