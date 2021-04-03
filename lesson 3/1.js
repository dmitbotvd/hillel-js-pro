let a = 1,
    b = 2,
    c = 3;
if (a <= b) {
  if (b <= c) {
    console.log(a, b, c);
  } else if (a <= c) {
    console.log(a, c, b);
  } else {
    console.log(c, a, b);
  }
} else if (c <= b) {
  console.log(c, b, a);
} else if (a <= c) {
  console.log(b, a, c);
} else {
  console.log(b, c, a);
}
    
