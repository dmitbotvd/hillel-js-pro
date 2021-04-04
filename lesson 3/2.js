// let table = alert('У тебя 3 варианта Фаренгейт(f), Цельсий(c), Кельвин(k)'),
//     quizTemp = prompt('Укажи температуру', ''),
//     unitPrompt = prompt('Выбери  (f), (c), (k)', '');
// let f, c, k, 
//     temp = Number(quizTemp),
//     unit = unitPrompt;

// if (unit == 'f') {
//   f = temp;
//   c = Math.round((f - 32) * 5 / 9);
//   k = Math.round(c + 273.15);
//   console.log(`Фаренгейт ${f} Цельсий ${c} Кельвин ${k}`);
// } else if (unit == 'c') {
//   c = temp;
//   f = (c * 9 / 5) + 32;
//   k = c + 273.15;
//   console.log(`Цельсий ${c} Фаренгейт${f} Кельвин ${k}`);  
// } else if (unit == 'k') {
//   k = temp;
//   c = Math.round(k - 273.15);
//   f = Math.round((c * 9 / 5) + 32);
//   console.log(`Кельвин ${k} Цельсий ${c} Фаренгейт ${f}`); 
// }


function temperatureConvert(temp, format) {
  let f, c, k;
  if (format === 'f') {
    f = temp;
    c = (f - 32) * 5 / 9;
    k = c + 273.15;

    return (`Фаренгейт ${f} Цельсий ${c} Кельвин ${k}`);
  } 
  if (format === 'c') {
    c = temp;
    f = c * 9 / 5 + 32;
    k = c + 273.15;

    return (`Цельсий ${c} Фаренгейт ${f} Кельвин ${k}`);
  }
  if (format === 'k') {
    k = temp;
    c = k - 273.15;
    f = (c * 9 / 5) + 32;

    return (`Кельвин ${k} Цельсий ${c}  Фаренгейт ${f}`);
  } else {
    console.log('pls enter "f" "c" "k"');
  }
  
}
console.log(temperatureConvert(-273.15, 'c'));
console.log(temperatureConvert(-274, 'c'));
console.log(temperatureConvert(-275, 'c'));
console.log(temperatureConvert(+273.15, 'c'));
console.log(temperatureConvert(400, 'c'));
console.log(temperatureConvert(100, 'c'));