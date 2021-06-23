function setCookie(name, value, options = {}) {
  options = {
    path: '/',
  };
  let updatedCookie = encodeURIComponent(name) + " = " + encodeURIComponent(value);
  document.cookie = updatedCookie;
}
setCookie('name', 'Vasyn', {'max-age': 3600});
// let cookie = document.cookie.split(';');

function cookieFun() {
  let body = document.querySelector('body');
  let allInput = body.querySelectorAll('input');
  for (let i = 0; i <= allInput.length - 1; i++) {
    allInput[i].addEventListener('blur', function(event) {
      document.cookie = event.target.value;
      let cookie = document.cookie.split(';');
      allInput[i].value = cookie[1];
      console.log(cookie[1]);
    });
  }
}
cookieFun();
let input = document.querySelector('input');
let value = localStorage.setItem('name', 'valeriy');
let value2 = localStorage.getItem('name');
input.value = value2;
console.log(value2);
