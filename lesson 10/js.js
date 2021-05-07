async function newStory() {
  let kolob = {
    name: 'Колобок',
    isZavis: true,
    say: function(phrase) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`${this.name} говорит: ${phrase}`);
          if(this.isZavis) {
            resolve('Далее');
          } else {
            reject('Error');
          }
        }, 3000);
      });
    },
  };
  
  let grandM = {
    name: 'Мама',
    say: function(phrase) {
      console.log(`${this.name} говорит: ${phrase}`);
    },
  };

  let lisa = {
    name: 'Lisa',
    say: function(phrase) {
      console.log(`${this.name} говорит: ${phrase}`);
    }
  };


  async function chapster1(name1, name2) {
    name2.say('Привет. 1');
    await name1.say('Привет. 2');
    name2.say('Почему лагаешь? Ты где? 3');
    await name1.say('Как дела? 4');
    name2.say('Ты пропадаешь. 5');
    
    return name1.say('Пинг. 6');
  }
  async function chapster2(name1, name2) {
    name2.say('Привет. 1');
    await name1.say('Привет. 2');
    name2.say('Где мои деньги? 3');
    await name1.say('Как дела? 4');
    name2.say('Где мои деньги? 5');
    
    return name1.say('Что-то лагает, перенаберу. 6');
  }

  await chapster1(kolob, grandM).then(() => {
    console.log('Конец 1 части.');
  });
  await chapster2(kolob, lisa).then(() => {
    console.log('Конец 2 части.');
  });
}


newStory();