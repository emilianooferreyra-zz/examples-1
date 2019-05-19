//1-Select elements to which we will apply events
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');

//2-Add listener
one.addEventListener('mouseover', function() {
  one.textContent = 'message1';
});
one.addEventListener('mouseout', function() {
  one.textContent = 'message2';
});

two.addEventListener('click', function() {
  two.textContent = 'click1';
});
two.addEventListener('click', function() {
  two.textContent = 'click2';
});

three.addEventListener('dblclick', function() {
  three.textContent = 'doubleclick'
});