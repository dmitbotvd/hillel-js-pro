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

