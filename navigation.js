function getNavigation() {
    const navigationWrapper = document.createElement('nav');
    navigationWrapper.classList.add('navigation-wrapper');
    
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
   document.body.prepend(navigationWrapper);
   navigationWrapper.append(navigationList);

  }
  getNavigation()