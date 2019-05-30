const name = 'Emiliano';
const job = 'Web Developer';

//concat javacript
console.log('Name: ' + name + ', Job: ' + job)
console.log(`Name: ${name}, Job: ${job}`);

//concat multiple lines
const containerApp = document.querySelector('#app');
let html = '<ul>' +
              '<li>Name: ' + name + '</li>' +
              '<li>Job: ' + job + '</li>' +
            '</ul>';

let html = `
   <ul>
     <li>Name: ${name}</li>
     <li>Job: ${job}</li>
   </ul>
`;

containerApp.innerHTML = html;