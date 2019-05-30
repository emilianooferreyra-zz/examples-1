// parameters default in function
// function expression
const activity = function(name = 'Walter White', activity = 'Teach chemistry') {
  console.log(`the person ${name} is carrying out the activity ${activity}`)
}
activity('Juan', 'Learnin JS');
activity('Pedro', 'Creating website')
activity('Antonio')