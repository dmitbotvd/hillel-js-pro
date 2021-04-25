let newMessage;
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