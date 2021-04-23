function story() {
  let kolobok = {
      name: 'колобок',
      say: function(phrase) {
          console.log(phrase);
      }
  };
  let grandFa = {
      name: 'дедушки',
      say: function(phrase) {
          console.log(phrase);
      }
  };
  let grandMa = {
      name: 'бабушки',
      say: function(phrase) {
          console.log(phrase);
      }
  };
  let volk = {
    name: 'волк',
    say: function(phrase) {
        console.log(phrase);
    }
  };
  let lisa = {
    name: 'лиса',
    say: function(phrase) {
        console.log(phrase);
    }
  };
  chapter1(kolobok, grandMa, grandFa);
  chapter2(kolobok, volk, lisa);
  chapter3(kolobok);
  function chapter1(unit1 , unit2, unit3) {
    unit2.say(`Привет ${unit1.name}`);
    unit1.say(`Говорит ${unit1.name}: Я от ${unit2.name} ушел и от ${unit3.name} ушел`);
  }
  function chapter2(unit1 , unit2, unit3) {
    unit2.say(`Привет ${unit1.name} говорит ${unit2.name}`);
    unit1.say(`Я от ${grandFa.name} ушел и от ${grandFa.name} ушел и от тебя ${unit2.name} и ${unit3.name} уйду`);
    unit2.say(`От всех уйду говорит ${unit1.name}`);
  }
  function chapter3(unit1) {
    unit1.say(`Я ${unit1.name} ушел от всех ${grandFa.name}, ${grandMa.name}, ${volk.name}, ${lisa.name}`);
    console.log('Конец');
  }
}
story();

