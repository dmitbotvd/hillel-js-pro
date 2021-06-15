function sendRequest(method, url, load = null) {
  return new Promise((res, rej) => {
    let req = new XMLHttpRequest();
    req.open(method, url);
    req.responseType = 'json';
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = () => {
      res(req.response);
      console.log('good');
    };
    req.onerror = () => {
      rej(req.response);
      console.log('error');
    };
    req.send();
  });
}
// async function user() { user(); }
let url = 'http://jsonplaceholder.typicode.com/users';
let user =  sendRequest('GET', url);



user.then((data) => {
  data.sort((a, b) => {
    let nameA=a.company.name;
    let nameB=b.company.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  //console.log(data);
  test(data, 1);
});
user.then((data) => {
  let arr = [];
  data.filter((el) => {
    if (el.name[0] == "C") {
      arr.push(el.name);
      //test(data, 2);
    }
    
  });
  //data.sort(byField('name'));
  //data.forEach(user => console.log(user.name));
  console.log(arr);
});

function byField(field) {
  // field.filter((e) => {
    // console.log(field);
  // });
  
  //return (a, b) => a.name[0] === 'C' ? 1 : b[field];
  //return (a, b) => a[field] > b[field] ? 1 : console.log('good');
}

function test(arg, k) {
  let row = document.querySelector(`.item-${k}`);
  let col = row.querySelectorAll('.col-3');
  for (let i = 0; i < col.length; i++) {
    let div = document.createElement('div');
    col[i].append(div);
    div.textContent = `person: ${i + 1}`;
    let name = col[i].querySelector('.name');
    let email = col[i].querySelector('.email');
    let addressStreet = col[i].querySelector('.address-street');
    let phone = col[i].querySelector('.phone');
    name.textContent = 'name: ' + arg[i].name;
    email.textContent = 'email: ' + arg[i].email;
    addressStreet.textContent = 'address - street: ' + arg[i].address.street;
    phone.textContent = 'phone: ' + arg[i].phone;
  }
}
// user.then((data) => {
//   // let arr = [];
//   // data.forEach((e, item) => {
//   //   arr.push(data[item].company.name);
//   //   console.log(arr);
//   // });
//   data.sort();
// });

// function generationUser() {
//   // let row = document.querySelector('.row');
//   // let col = row.querySelectorAll('.col-3');
//   col.forEach((e, item) => {
//     e.classList.add('items');
//   });
// }
// generationUser();