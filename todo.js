let button = document.querySelector('#btn-add');
let input = document.querySelector('#new-activity');
let ul = document.querySelector('ul');

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
}

function addListAfterClick() {
  if(inputLength()) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if(inputLength() > 0 && event.keyCode == 13) {
    createListElement();
  }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);