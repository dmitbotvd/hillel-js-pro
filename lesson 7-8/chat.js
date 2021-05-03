let newMessage;
let check = document.getElementById('myCheck');
function deleteMessage() {
  let rem = document.querySelector('.chat-box__main');
  rem = rem.removeChild(rem.lastElementChild);
}
function newTest(arrg) {
  let main = document.createElement('div');
  main.classList.add('center-text');
  newMessage = document.createElement('p');
  main.appendChild(newMessage);
  newMessage.classList.add('new-message-bot');
  main.classList.add('left');
  newMessage.append(arrg);
  let mainContent = document.querySelector('.chat-box__main');
  mainContent.appendChild(main);
}
let arr = ['Привет', 'мы из компании орифлен', 'это не финансовая пирамида', 'при заказе от 500грн скидка 70%', 'ты застрахован?', 'Зароботок на криптовалюте интерестно?'];
let latency = 2000,
    iteration = 0,
    numIterations = arr;
let loop = function() {
  newTest(arr[iteration]);
  iteration += 1;
  if ( iteration < arr.length ) {
    setTimeout( loop, latency );
  }
};
loop();
let chat = document.querySelector('.button a');
let chatBox = document.querySelector('.chat-box');
let inputText = document.querySelector('#chat');
let sendMessage = document.querySelector('.chat-button a');
let nodaParent = document.querySelector('.chat-box__main');
let exit = document.querySelector('.exit');
function createNewMessage() {
  let testStringCounter = inputText.value;
  if (testStringCounter.length <= 10 && testStringCounter.length != 0) {
    newMessage = document.createElement('p');
    newMessage.classList.add('new-message');
    nodaParent.appendChild(newMessage);
    newMessage.textContent = inputText.value;
    inputText.value = '';
  } else {
    inputText.value = '';
    alert('Больше 10 симоволов или пустая строка!');
    return;
  }
}
sendMessage.addEventListener('click', function(e) {
  e.preventDefault();
  createNewMessage();
});
inputText.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    createNewMessage();
  }
});
chat.addEventListener('click', function(e) {
  e.preventDefault();
  chatBox.classList.add('chat-active');
});
exit.addEventListener('click', function(e) {
  e.preventDefault();
  chatBox.classList.remove('chat-active');
});
sendMessage.addEventListener('click', function() {
  if(check.checked === true) {
    setTimeout(() => {
      deleteMessage();
      console.log(check.checked);
      check.checked = false;
    }, 5000);
  } 
});