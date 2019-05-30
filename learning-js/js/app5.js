// create function
// function declaration
function hello(name) {
  console.log('Welcome ' + name)
}

hello('Emi');
hello('kuki');

// function expression
const client = function(nameClient) {
  console.log('show date clien: ' + nameClient);
}
client('Emi')