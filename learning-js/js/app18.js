// function Todo(
//   this.name = todo;
// )

// Class

class Todo {
  constructor() {
    this.name = name;
    this.priority = priority; 
  }
  show() {
    return `${this.name} priority ${this.priority}`;
  }
}

// Inherit
class Outstandingpurchases extends Todo {
  constructor(name, priority, cant) {
    super(name, priority);
    this.cant = cant; 
  }
  show() {
    super.show()
    console.log(`And the cant is ${this.cant}` );
  }
  info() {
    return 'INFO'
  }
}

// create objects
let todo1 = new Todo('Learnig Javascript', 'High');
let todo2 = new Todo('Coffe', 'Medium')
let todo3 = new Todo('Walk dog', 'Low')
let todo4 = new Todo('Traveling', 'High')

console.log(todo1.show());

// Todo
let purchases = new Outstandingpurchases('Jabon', 'Urgency', 3);
console.log(purchases.show() );
console.log(purchases.info() );