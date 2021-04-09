function main(temperature, scale) {
  let f, c, k;
  switch (scale) {
    case 'f':
      f = temperature;
      c = farC(f);
      k = farK(c);
      break;
    case 'c':
      c = temperature;
      f = celF(c);
      k = celK(c);
      break;
    case 'k':
      k = temperature;
      c = kelC(k);
      f = kelF(c);
      break;
  }
  return `Кельвин ${k} Цельсий ${c}  Фаренгейт ${f}`;
}

function farC(f) {
  return Math.round((f - 32) * 5 / 9);
}
function farK(c) {
  return Math.round(c + 273.15);
}
function celF(c) {
  return Math.round(c * 9 / 5 + 32);
}
function celK(c) {
  return Math.round(c + 273.15);
}
function kelC(k) {
  return Math.round(k - 273.15);
}
function kelF(c) {
  return Math.round((c * 9 / 5) + 32);
}

console.log(main(100, 'f'));