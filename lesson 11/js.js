Object.setPrototypeOf(FantasyPersone.prototype, Person.prototype);
Object.setPrototypeOf(AnimalPersone.prototype, Person.prototype);
Object.setPrototypeOf(Lisa.prototype, AnimalPersone.prototype);
Object.setPrototypeOf(Volk.prototype, AnimalPersone.prototype);
function Person(name, time) {
  this.name = name;
  this.isAnimal = false;
  this.resolv = true;
  this.isSpeak = true;
  this.say = phrase => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log(`${this.name} say: ${phrase}`);
        if (this.resolv) {
          res(phrase);
        } else {
          rej('error');
        }
      }, time);
    });
  };
}
Person.prototype.say = function(phrase) {
  console.log(`${this.name} say: ${phrase}`);
};
function FantasyPersone(name, time) {
  Person.call(this, name, time);
  // this.name = name;
  // this.isAnimal = false;
  this.circle = true;
}
function AnimalPersone(name, time) {
  Person.call(this, name, time);
  this.name = name;
  this.isSpeak = false;
}
function Lisa(name, time) {
  AnimalPersone.call(this, name, time);
  this.isSpeak = true;
  this.isAnimal = true;
  if (this.isSpeak) {
    console.log('good speak');
  } else {
    console.log('not speak');
  }
}
function Volk(name) {
  AnimalPersone.call(this, name);
  this.isAnimal = true;
  this.isSpeak = false;
}
async function story() {
  let kolobok = new FantasyPersone('kolobok', 4000);
  let grandMa = new Person('Mom', 3000);
  let lisa = new Lisa('lisa', 5000);
  let volk = new Volk('volk');
  //lisa.isAnimal = true;
  console.log(kolobok);
  console.log(grandMa);
  console.log(lisa);
  console.log(volk);
  async function chapter1(kol, ma) {
    await kol.say('1');
    await ma.say('2');
    await kol.say('3');
    await ma.say('4');
  }
  async function chapter2(kol, lis) {
    //kol.resolv = false;
    await kol.say('11')
      .then(() => {
        lis.say('22');
      }).catch((rej) => {
        console.log(rej);
      });
  }
  await chapter1(kolobok, grandMa);
  await chapter2(kolobok, lisa);
}
story();






function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}
Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

let pers1 = new Person('Val', 'Dmit', 25, 'man', 'dev');
console.log(pers1);

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
Object.getOwnPropertyNames(Teacher.prototype);
let pers2 = new Teacher('Val', 'Dmit', 25, 'man', 'dev', 'tra');
Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false,
  writable: true,
});

Teacher.prototype.greeting = function () {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }
  console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};
var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');