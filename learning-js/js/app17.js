const downloadUser = cant => new Promise((resolve, reject) => {
  // cant the api randomuser
  const api = `https://randomuser.me/api/?results=${cant}&nat=us`;
  // call
  const xhr = new XMLHttpRequest();

  // open connection
  xhr.open('GET', api, true);
  // on load
  xhr.onload = () => {
    if(xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText).results);
    } else {
      reject(Error(xhr.statusText));
    }
  }
  // Err
  xhr.onerror = (error) => reject(error);

  // Send
  xhr.send();
});

downloadUser(20)
  .then(
    members => printHTML(members),
    error => console.error(
      new Error('Error' + error)
    )
  );
function printHTML(users) {
  users.forEach(user => {
    html += `
      <li>
        Name: ${user.name.first} ${user.name.last}
        Country: ${user.nat}
        Image: <img src="${user.picture.medium}">  
      </li>
    `
  });

  const containerApp = document.querySelector('#app');
  containerApp.innerHTML = html;
}