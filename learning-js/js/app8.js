// Object

// Object literal

const person = {
  name: 'Emiliano',
  profession: 'Web Developer',
  age: '500'

}

console.log(person);
console.log(person.name);
console.log(person.profession);
console.log(person.age);
console.log(person['age']);


// Object constructor

function Todo(name, urgency) {
  this.name = name;
  this.urgency = urgency;
}

// Create one todo
const todo1 = new Todo('Learning JS and React', 'Urgency');
const todo2 = new Todo('Coffe ', 'Urgency');
const todo3 = new Todo('Walk theDog', 'Medium');
const todo4 = new Todo('Meet my in-laws', 'Slow');

console.log(todo1);
console.log(todo2);
console.log(todo3);
console.log(todo4);
