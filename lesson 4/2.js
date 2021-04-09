function res(n) {
  if (n === 1) {
    return 1;
  } 
  let current = n;
  n -= 1;
  return current + res(n);
}
console.log(res(5));