let f, c, k;
function calcTemperature(temperature, scale) {
  if (scale == Fahrenheit) {
    return Fahrenheit(temperature);
  } else if (scale == Celsius) {
    return Celsius(temperature);
  } else if (scale == Kelvin) {
    return Kelvin(temperature);
  } else {
    console.error();
  }
}
let Fahrenheit = function Fahrenheit(temperature) {
  f = temperature;
  c = Math.round((f - 32) * 5 / 9);
  k = Math.round(c + 273.15);
  return `Фаренгейт ${f} Цельсий ${c} Кельвин ${k}`;
};
let Celsius = function Celsius(temperature) {
  c = temperature;
  f = Math.round(c * 9 / 5 + 32);
  k = Math.round(c + 273.15);
  return `Цельсий ${c} Фаренгейт ${f} Кельвин ${k}`;
};
let Kelvin = function Kelvin(temperature) { 
  k = temperature;
  c = Math.round(k - 273.15);
  f = Math.round((c * 9 / 5) + 32);
  return `Кельвин ${k} Цельсий ${c}  Фаренгейт ${f}`;
};

console.log(calcTemperature(100, Fahrenheit));
console.log(calcTemperature(100, Celsius));
console.log(calcTemperature(100, Kelvin));