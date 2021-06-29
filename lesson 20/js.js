let table = document.querySelector('table');
table.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('green')) {
    removeTd(target);
  } else {
    colorTd(target);
  }
});
function colorTd(elem) {
  elem.classList.add('green');
}
function removeTd(elem) {
  elem.classList.remove('green');
}