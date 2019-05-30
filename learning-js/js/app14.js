// Sprear operator ...

// let lenguage = ['Javascript', 'PHP', 'Python'];
// let frameworks = ['React', 'Laravel', 'Django'];

// let combination = lenguage.concat(frameworks);
// let combination = [...lenguage, ...frameworks];

// let [last] = [...lenguage].reverse();
// console.log(last)

function sum(a,b,c) {
  console.log(a+b+c);
}

const number = [1,2,3];
sum(...number);