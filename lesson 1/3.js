// 3. модальные
alert('Ответите на пару вопросов?');
alert('Спасибо');
let quizOne = confirm('Хотите продолжить ?'),
quizTwo = confirm('Вам есть 18?'),
quizThree = prompt('Ваше Имя?'),
quizFour = prompt('Ваша Фамилия?'),
quizFive = prompt('Город?');

console.log(`1. ${quizOne}, 2. ${quizTwo}, 3. ${quizThree}, 4. ${quizFour}, 5. ${quizFive}`);
