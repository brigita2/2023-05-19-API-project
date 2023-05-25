async function init() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`);
    const usersData = await response.json();

    const content = document.querySelector('#content');
    const usersListElement = createUsersList(usersData);
    content.append(usersListElement);
}


  function createUsersList(users) {
    const usersList = document.createElement('ul');
    usersList.classList.add('users-list');
    
    users.forEach(element => {
        const nameData = document.createElement('li');
        nameData.classList.add('name-data');
        
        const nameText = element.name;
        const postLength = element.posts.length;
        nameData.innerHTML = `<a href="user.html">${nameText} ${postLength}</a>`
        usersList.append(nameData)
    });
    return usersList;
  }

init();