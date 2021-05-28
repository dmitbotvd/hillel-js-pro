
function createButtons() {
  for (var i = 0; i < 10; i++) {
    const z = i;
      let button = document.createElement('button');
      button.textContent = `Button ${i}`;
      button.addEventListener('click', function() {
          console.log(`My number is ${z}`);
      });

      document.body.appendChild(button);
  }
}
createButtons();
function removeExclamationMarks(s) {
  let vat = s.split('');
  let num = s.indexOf('!');
  delete vat[num];
  let test = vat.join('');
  //vat.split();
  //delete vat[num];
  console.log(test);
  //return '';
}