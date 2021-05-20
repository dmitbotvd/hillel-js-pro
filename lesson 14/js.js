function createButtons() {
  let arr = [];
  for (var i = 0; i < 10; i++) {
    let button = document.createElement('button');
    button.textContent = `Button ${i}`;
    let count = arr.push(i);
    button.addEventListener('click', function() {
      console.log(`My number is ${--count}`);
    });
    document.body.appendChild(button);
  }
}
createButtons();