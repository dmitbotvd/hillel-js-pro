function sendRequest(method, url) {
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
let url = 'http://jsonplaceholder.typicode.com/users';
let user = sendRequest('GET', url);
user.then((e) => {
  example(e, 0);
  //console.log(elem);
});
user.then((e) => {
  example(e, 1);
});
let container = document.querySelector('.container');
let arrClass = ['name', 'address-city', 'company-name', 'phone'];
function example(data, count) {
  let div = document.createElement('div');
  div.classList.add('row');
  container.append(div);
  let row = container.querySelectorAll('.row');
  //console.log(row[1]);
  for (let j = 0; j <= 3; j++) {
    let div = document.createElement('div');
    div.classList.add('col-3');
    row[count].append(div);
    let col = row[count].querySelectorAll('.col-3');
    for (let i = 0; i <= arrClass.length - 1; i++) {
      let div = document.createElement('div');
      div.classList.add(`${arrClass[i]}`);
      col[j].append(div);
    }
    domElem(j, col, data);
  }
}
function domElem(j, col, data) {
  let name = col[j].querySelector('.name');
  let addressCity = col[j].querySelector('.address-city');
  let companyName = col[j].querySelector('.company-name');
  let phone = col[j].querySelector('.phone');
  data.sort((e)=> {
    if (e.name[0] == 'C') {
      name.textContent = 'name: ' + e.name;
      //console.log(e);
      addressCity.textContent = 'address-city: ' + e.address.city;
      companyName.textContent = 'company-name: ' + e.address.street;
      phone.textContent = 'phone: ' + data[j].phone;
    }
  });
  
}