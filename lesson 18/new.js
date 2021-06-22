let test = fetch('https://jsonplaceholder.typicode.com/users')
  .then((respocne) => respocne.json())
  .then(json => {
    sortUser(json);
    console.log(json);
    createNewBlock(json);
//    sortUser(json);
  });
function createElement(name) {
  let container = document.querySelector('.container');
  let div = document.createElement('div');
  container.append(div);
  div.classList.add(name);
  return div;
}
function createNewBlock(users) {
  let row = createElement('row');
  const container = document.querySelector('.container');
  container.append(row);
  for (let i = 0; i <= users.length - 1; i++) {
  	const col = createCol(users[i]);
  	row.append(col);
  }
}
function createCol(user) {
	 let col = createElement(`col-${user.length - 1}`);
   let arr = ['name', 'email', 'website', 'phone'];
  for (let i = 0; i <= arr.length - 1; i++) {
   	const div = createBlock(user[arr[i]]);
    div.classList.add(arr[i]);
    col.append(div);
  }
   return col;
}
function createBlock(value) {
	 let div = document.createElement('div');
   div.classList.add(value[0]);
   div.innerHtml = value;
   return div;
}
function sortUser(user) {
  user.sort( (a, b) => {
    if (a.username > b.username) {
      return 1;
    }
    return -1;
  });
  // console.log(user);
}
