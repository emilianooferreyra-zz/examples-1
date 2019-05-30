// Scope
var music = 'rock';

if(music) {
  var music = 'Grunge';
  console.log('inside if', music);
}
console.log('outside if', music);

// Scope with let
let music = 'rock';

if(music) {
  let music = 'Grunge';
  console.log('inside if', music);
}
console.log('outside if', music);