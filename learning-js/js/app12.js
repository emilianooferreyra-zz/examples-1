// methods or function in object
const person = {
  name: 'Emiliano',
  job: 'Web developers',
  age: 500,
  musicRock: true,
  showInfo: function() {
    console.log(`${this.name} is ${this.job} and your age ${this.age}`)
  }
}

person.showInfo();