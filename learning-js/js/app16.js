// Promises
const applyPrice = new Promise((resolve, reject) => {
  setTimeout(() => {
    let price = false;
    if(price) {
      resolve('Price apply');
    } else {
      reject('No apply');
    }
  }, 3000)
});

applyPrice
  .then(result => { console.log(result); })
  .catch(err => { console.log(err); })                             
