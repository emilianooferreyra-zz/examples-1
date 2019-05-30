// Methods in array 

const persons = [
  {name: 'Emiliano', age: 23, learn: 'Javacript'},
  {name: 'Fernando', age: 25, learn: 'PHP'},
  {name: 'Nicolas', age: 42, learn: 'Python'},
  {name: 'Facundo', age: 33, learn: 'React'},
  {name: 'Daniel', age: 43, learn: 'Vue'},
  {name: 'Critian', age: 63, learn: 'Angular'},
  {name: 'Ramiro', age: 77, learn: 'Preact'},
  {name: 'Marcelo', age: 88, learn: 'Xcode'},
  {name: 'Juan', age: 2222, learn: 'Java'}
];

console.log(persons);
// Adult
const adult = persons.filter(person => {
  return person.age > 28        ;
});

//What learn and age
const facundo = persons.find(person => {
  return person.nombre === 'Facundo';
});
// console.log('Facundo esta aprendiendo: ' + facundo.learn)

let total = persons.reduce((ageTotal, person) => {
  return ageTotal + person.age
}, 0);
console.log(total / persons.length);

