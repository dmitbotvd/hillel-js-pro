let table = document.querySelector('table');

table.addEventListener('click', (e) => {
  console.log(e.currentTarget.id);
});