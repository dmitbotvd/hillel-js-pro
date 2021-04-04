let table = alert('У тебя 3 варианта Фаренгейт(f), Цельсий(c), Кельвин(k)'),
    quizTemp = prompt('Укажи температуру', ''),
    unitPrompt = prompt('Выбери  (f), (c), (k)', '');
let f, c, k, 
    temp = quizTemp,
    unit = unitPrompt;

if (unit == 'f') {
  f = temp;
  c = Math.round((f - 32) * 5 / 9);
  k = Math.round(c + 273.15);
  console.log(`Фаренгейт ${f} Цельсий ${c} Кельвин ${k}`);
} else if (unit == 'c') {
  c = temp;
  f = Math.round((c * 9 / 5) + 32);
  k = Math.round(c + 273.15);
  console.log(`Цельсий ${c} Фаренгейт${f} Кельвин ${k}`);  
} else if (unit == 'k') {
  k = temp;
  c = Math.round(k - 273.15);
  f = Math.round((c * 9 / 5) + 32);
  console.log(`Кельвин ${k} Цельсий ${c} Фаренгейт ${f}`); 
}
