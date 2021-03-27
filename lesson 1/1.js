// 1. переменные
let firstName = 'Valeriy',
    lastName = 'Dmitriev',
    yearOfBirth = '15.11.1995',
    age = 25,
    email = 'dmitbotvd@gmail.com',
    tel = '380968181208',
    country = 'Ukraine',
    city = 'Dnipro',
    isMaried = false;
    student = true,
    result = `Имя ${firstName} <br> Фамилия ${lastName},<br> год рожд. ${yearOfBirth},<br> лет ${age},<br> емейл ${email},<br> телефон ${tel},<br> страна ${country},<br> город ${city},<br> женат ${isMaried},<br> студент ${student}`;

console.log(result);
document.write(result);

let array = [firstName, lastName, yearOfBirth, age, email, tel, country, city, student, isMaried];
for (let i = 0; i < array.length; i++) {
  console.log(typeof array[i]);
}
