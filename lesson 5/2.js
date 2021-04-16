function evenAndOdd(arg, fromNumber, toNumber) {
  let i = fromNumber;
  let to = toNumber;
  let arr = [];
  switch(arg) {
    case 'even':
      console.log('good');
      for (; i <= to; i++) {
        arr.push(i);
        if (i % 2 === 0) {
          console.log(i);
        }
      }
    break;
    case 'odd':
      for (; i <= to; i += 2) {
        arr.push(i);
          console.log(i);
      }
    break;
  }
}
evenAndOdd('even', 1, 10);
evenAndOdd('odd', 1, 10);