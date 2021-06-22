let test = fetch('http://jsonplaceholder.typicode.com/users')
  .then((respocne) => respocne.json())
  .then(json => {
    createNewBlock();
    sortUser(json);
  });
function createElement(name) {
  let container = document.querySelector('.container');
  let div = document.createElement('div');
  container.append(div);
  div.classList.add(name);
  return div;
}
function createNewBlock() {
  let row = createElement('row');
  for (let i = 0; i <= 3; i++) {
    let col = createElement('col-3');
    row.append(col);
    createUserContent(col);
  }
}
function sortUser(user) {
  user.sort( function(a, b) {
    if (a.username > b.username) {
      return 1;
    } else {
    return -1;
    }
  });
  console.log(user);
}
function createUserContent(col) { // в каждый col должно пушить сетку с юзерами
  let arr = ['name', 'email', 'website', 'phone'];
  for (let i = 0; i <= arr.length - 1; i++) {
    let div = document.createElement('div');
    div.classList.add(arr[i]);
    col.append(div);
  }
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let website = document.querySelector('.website');
  let phone = document.querySelector('.phone');
  console.log(col);
}
function pushUser() {

}