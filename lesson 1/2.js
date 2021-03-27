// 2. обьект
const user = {
  firstName: 'Valeriy',
  lastName: 'Dmitriev',
  yearOfBirth: '15.11.1995',
  age: 25,
  email: 'dmitbotvd@gmail.com',
  tel: '380968181208',
  country: 'Ukraine',
  city: 'Dnipro',
  isMaried: false,
  student: true,
};

for (let key in user) {
  console.log(key + ' - ' + user[key]);
}
