function sendRequest(method, url, load = null) {
  return new Promise((res, rej) => {
    let req = new XMLHttpRequest();
    req.open(method, url);
    req.responseType = 'json';
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = () => {
      res(req.response);
    };
    req.onerror = () => {
      rej(req.response);
    };
    req.send();
  });
}
async function user() {
  let url = 'http://jsonplaceholder.typicode.com/users';
  let user = await sendRequest('GET', url);
  test(user);
}
user();
let row = document.querySelector('.row');
let col = row.querySelectorAll('.col-3');
let arrClassAdd = ['address', 'city', 'company', 'email', 'phone', 'username', 'website'];
function createDOMClass() {
  col.forEach((e, item) => {
    e.classList.add('params');
    for (let i = 0; i < arrClassAdd.length - 1; i++) {
      let p = document.createElement('p');
      let div = document.createElement('div');
      col[item].append(div);
      div.classList.add(arrClassAdd[i]);
      div.append(p);
    }
  });
}
createDOMClass();
function test(obj) {
  for (let i = 0; i <= obj.length - 1; i++) {
    let myArticle = document.createElement('article');
    let myH2 = document.createElement('h2');
    let myPara1 = document.createElement('p');
    let myPara2 = document.createElement('p');
    let myPara3 = document.createElement('p');
    
    myH2.textContent = obj[i].name;
    myPara1.textContent = 'city: ' + obj[i].address.city;
    myPara2.textContent = 'email: ' + obj[i].email;
    myPara3.textContent = 'website:' + obj[i].website;

    myArticle.append(myH2);
    myArticle.append(myPara1);
    myArticle.append(myPara2);
    myArticle.append(myPara3);

    col[i].appendChild(myArticle);
  }
}