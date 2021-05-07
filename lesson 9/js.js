// function newStory() {
//   let kolob = {
//     name: 'Колобок',
//     isZavis: true,
//     say: function(phrase) {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log(`${this.name} говорит: ${phrase}`);
//           if(this.isZavis) {
//             resolve('Далее');
//           } else {
//             reject('Error');
//           }
//         }, 5000);
//       });
//     },
//   };
  
//   let grandM = {
//     name: 'Мама',
//     say: function(phrase) {
//       console.log(`${this.name} говорит: ${phrase}`);
//     },
//   };

//   chapster1(kolob, grandM);
// }

// function chapster1(name1, name2) {

//   name2.say('Привет');
//   name1.say('Привет')
//     .then((kolobokState) => {
//       name2.say('Как дела?');
//       console.log(kolobokState);
//       return name1.say('Хорошо а ты?');
//     })
//     .then((kolobokState) => {
//       name2.say('Что с тобой?');
//       console.log(kolobokState);
//       name1.isZavis = false;
//       return name1.say('Пинг большой!');
//     })
//     .catch((rej) => {
//       console.log(rej);
//     });
  
//   name2.say('Что-то не так?');
// }
// newStory();
const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
};

const url = "fetch('https://jsonplaceholder.typicode.com/todos/1')";

// function fetchTodos() {
//   console.log('fetch rodo starter');
//   return delay(2000).then(() => {
//     return fetch(url);
//   }).then(Response => Response.json());
// }
// fetchTodos()
//   .then(data => {
//     console.log('data', data);
//   })
//   .catch(e => console.error(e));

// async function fetchAsyncTodos() {
//   console.log('fetch rodo starter');
//   await delay(2000);
//   const responce = await fetch(url);
//   const data = await responce.json();
//   console.log('data', data);
// }
// fetchAsyncTodos();