// Object

// Object literal

const person = {
  name: 'Emiliano',
  profession: 'Web Developer',
  age: '500'
}
// console.log(person);
// const showClient = showInfoTodo(person.name, person.profession);
// console.log(showClient);

// Object constructor
function Todo(name, urgency) {
  this.name = name;
  this.urgency = urgency;
}

// Add prototype in todo
Todo.prototype.showInfoTodo = function() {
  return `The task ${this.name} has priority ${this.urgency}`
}

// Create one todo
const todo1 = new Todo('Learning JS and React', 'Urgency');
console.log(todo1);
console.log(todo1,showInfoTodo);

// const showInfo = showInfoTodo(todo1.name, todo1.urgency);
// console.log(showInfo);