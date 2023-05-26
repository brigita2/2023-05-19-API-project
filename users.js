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

  function getNavigation() {
    const navigationWrapper = document.querySelector('#navigation');
    const navigationList = document.createElement('ul');
    navigationList.classList.add('navigation-list');

    const home = document.createElement('li');
    home.innerHTML = `<a href="./index.html">Home</a>`;

    const users = document.createElement('li');
    users.innerHTML = `<a href="./users.html">Users</a>`;

    const albums = document.createElement('li');
    albums.innerHTML = `<a href="./albums.html">Albums</a>`;

    const posts = document.createElement('li');
    posts.innerHTML = `<a href="./posts.html">Posts</a>`;
    

   navigationList.append(home, users, albums, posts);
   navigationWrapper.append(navigationList);

  }
  getNavigation();

init();