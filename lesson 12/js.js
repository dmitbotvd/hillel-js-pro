class Character {
  constructor(name) {
    this.name = name;
  }
  say(phrase) {
    console.log(`${this.name} say: ${phrase}`);
  }
  sayProm(phrase) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log(`${this.name} say: ${phrase}`);
        res();
      }, 2000);
    });
  }
}
class Creature extends Character {
  
}
class Human extends Character {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
class MaleCharacter extends Human {

}
class FemaleCharacter extends Human {
  
}
class Animal extends Character {
  constructor(name, speak = false) {
    super(name);
    this.speak = speak;
  }
  say(phrase) {
    if (this.speak) {
      console.log(`${this.name} say: ${phrase}`);
    } else {
      console.log('gaf gaf');
    }
  }
}
class Fox extends Animal {
  constructor(name, speak, color) {
    super(name, speak);
    this.color = color;
  }
  
}
class Wolf extends Animal {
  constructor(name, speak) {
    super(name, speak);
  }
}

async function story() {
  let kolobok = new Creature('kolobok');
  let grandMa = new FemaleCharacter('mama', 75);
  let grandFa = new MaleCharacter('papa', 90);
  let lisa = new Fox('lisa', true, 'red');
  let volk = new Wolf('volk');
  let test = new Animal('test');
  // async function chapter1(pers1, pers2, pers3) {
  //   pers2.say('1');
  //   await pers1.sayProm('2').then(() => {
  //     return pers2.sayProm('3').then(() => {
  //       return pers3.say('4');
  //     });
  //   });
  // }
  async function chapter2(pers1, pers2, pers3) {
    pers2.say('11');
    await pers1.sayProm('22').then(() => {
      return pers2.sayProm('33').then(() => {
        pers3.say('4');
      });
    });
  }

  //await chapter1(kolobok, grandMa, grandFa);
  await chapter2(kolobok, lisa, volk);
  console.log(kolobok);
  console.log(grandMa);
  console.log(lisa);
  console.log(volk);
}
story();