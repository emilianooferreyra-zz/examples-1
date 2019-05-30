const learningJS = {
  version: {
    new: 'ES6',
    old: 'ES5'
  },
  framework: ['React', 'Angular', 'Vue']
}

// Destructuring is the drawing of values from an object
console.log(learningJS);

// Old
// let version = learningJS.version;
// let framework = learningJS.framework[1];

//New 
let {old} = learningJS.version
console.log(framework);