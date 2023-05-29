function getNavigation() {
    const headerElement = document.createElement('header');


    const navigationWrapper = document.createElement('nav');
    navigationWrapper.classList.add('navigation-wrapper');
    
    const navigationList = document.createElement('ul');
    navigationList.classList.add('navigation-list');

    
    
    
    headerElement.append(navigationWrapper);
    navigationWrapper.append(navigationList);
    document.body.prepend(headerElement);
    
    const meniuItems = [
        {
            title: 'Home',
            path: 'index.html'
        },
        {
            title: 'Posts',
            path: 'posts.html'
        },
        {
            title: 'Users',
            path: 'users.html'
        },
        {
            title: 'Albums',
            path: 'albums.html'
        }
    ];

    meniuItems.forEach(item => {
        let { title, path } = item;

        const navigationItem = document.createElement('li');
        navigationList.append(navigationItem);

        const meniuLink = document.createElement('a');

        if (location.pathname === '/' + path) {        //console.dir(location.pathname) yra puslapio adreso dalis /posts.html
            meniuLink.classList.add('meniu-link');
        }
        navigationItem.append(meniuLink);
        meniuLink.textContent = title;
        meniuLink.href = './' + path;
    })
    
   

  }
  getNavigation()