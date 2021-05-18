class Todo {
  constructor() {
    let link = document.querySelector('.but');
    link.addEventListener('click', () => {
      this.send();
    });
  }
  send() {
    let text = this.input();
    if(text){
        let params = {
            text: text,
        };
        let messageBlock = this.createMessageBox(params);
        this.addMessage(messageBlock);
    }
  }
  addMessage(block) {
    let content = document.querySelector('.content');
    content.appendChild(block);
  }
  input() {
    let inputEl = document.querySelector('.inputTask');
    let inputVal = inputEl.value;
    inputEl.value = '';
    return inputVal;
  }
  createMessageBox(params) {
    let div = document.createElement('div');
    div.classList.add('newTask');
    let p = this.createText(params.text);
    div.appendChild(p);
    let check = this.createCheck();
    div.appendChild(check);
    return div;
  }
  createCheck() {
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    return check;
  }
  createText(text) {
    let p = document.createElement('p');
    p.textContent = text;
    return p;
  }
}
let todo = new Todo();


