// async function init() {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const userData = await response.json();

//     const content = document.querySelector('#content');
//     const userInformationList = getUserData(userData);
//     content.append(userInformationList);
// }

// function getUserData(data) {

//     const title = document.createElement('h1');
//     title.classList.add('title')
//     title.textContent = 'Users Information';

//     const userDataContainer = document.createElement('div');
//     userDataContainer.classList.add('user-data-container');

//     const user = document.createElement('ol');
//     user.classList.add('user-data-list');
    
    
//     data.forEach(userData => {
       
        
//         const fullName = userData.name;
//         const nameSplit = fullName.split(' ');
//         const firstName = nameSplit[0];
//         const username = userData.username;
//         const email = userData.email;
//         const phone = userData.phone;
//         const website = userData.website;
//         const companyName = userData.company.name;
        
//         const userFullName = document.createElement('li');
//         userFullName.classList.add('user-full-name');
//         userFullName.textContent = `Name: ${fullName}`;

//         const firstNameUsername = document.createElement('span');
//         firstNameUsername.textContent = `Name/username: ${firstName}/${username}`;
//         firstNameUsername.style.display = 'block';

//         const userEmail = document.createElement('span');
//         userEmail.textContent = `Email: ${email}`;
//         userEmail.style.display = 'block';

//         const userPhone = document.createElement('span');
//         userPhone.textContent = `Phone: ${phone}`;
//         userPhone.style.display = 'block';

//         const userWebsite = document.createElement('span');
//         userWebsite.textContent = `Website: ${website}`;
//         userWebsite.style.display = 'block';

//         const userCompanyName = document.createElement('span');
//         userCompanyName.textContent = `Company name: ${companyName}`;
//         userCompanyName.style.display = 'block';
      
//         userFullName.append(firstNameUsername, userEmail, userPhone, userWebsite, userCompanyName);
//         user.append(userFullName);
//         userDataContainer.append(user);
//         content.append(title, userDataContainer);
        

//     });
//     return userDataContainer;
// }

// init();

async function init() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/2?_embed=posts&_embed=albums');
    const userData = await res.json();


    const contentElement = document.querySelector('#content');
    const userInfo = createUserInfoElement(userData);
    const userPosts = createUserPosts(userData.posts, userData.name);
    const userAlbums = createUserAlbums(userData.albums, userData.name);


    contentElement.append(userInfo, userPosts, userAlbums);
}

init();

function createUserInfoElement(user) {
    
    
    const { name, username, email, phone, website } = user;
    const { city, street, suite, zipcode } = user.address;
    const { lat, lng } = user.address.geo;
    
    const companyName = user.company.name;
    
    const addressText = `${street} ${suite}, ${city} (zipcode: ${zipcode})`;
    const addressMapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

    const userInfoWrapper = document.createElement('div');
    userInfoWrapper.classList.add('user-info-wrapper');

    userInfoWrapper.innerHTML = `<h1>${name} (${username})</h1>
                                <ul>
                                <li>Email: <a href="mailto:${email}">${email}</a></li>
                                <li>Phone: <a href="tel:${phone}">${phone}</a></li>
                                <li>Website: <a href="https://${website}" target="_blank">${website}</a></li>
                                <li>Company: ${companyName}</li>
                                <li>Address: <a href="${addressMapLink}">${addressText}</a></li>
                                </ul>`;

    return userInfoWrapper;
}

function createUserPosts(posts, name) {
    const postsWrapper = document.createElement('div');
    postsWrapper.classList.add('posts-wrapper');

    if (posts.length > 0) {
        const postsTitle = document.createElement('h1');
        postsTitle.classList.add('posts-title');
        postsTitle.textContent = `Posts of ${name}:`;
        
        const postsList = document.createElement('ul');
    
            posts.forEach(post => {
                const { title } = post;
                const postItem = document.createElement('li');
                const linkElement = document.createElement('a');
                linkElement.classList.add('link-element');
                linkElement.textContent = title;
                linkElement.href = './post.html';
    
                postsWrapper.prepend(postsTitle, postsList);
                postsList.append(postItem);
                postItem.prepend(linkElement);
            });
    }
    return postsWrapper;
}

function createUserAlbums(albums, name) {
    const albumsWrapper = document.createElement('div');
    albumsWrapper.classList.add('posts-wrapper');

    if (albums.length > 0) {
        const albumsTitle = document.createElement('h1');
        albumsTitle.classList.add('albums-title');
        albumsTitle.textContent = `Albums of ${name}:`;
        
        const albumsList = document.createElement('ul');
    
            albums.forEach(album => {
                const { title } = album;
                const albumItem = document.createElement('li');
                const linkElement = document.createElement('a');
                linkElement.classList.add('link-element');
                linkElement.textContent = title;
                linkElement.href = './album.html';
    
                albumsWrapper.prepend(albumsTitle, albumsList);
                albumsList.append(albumItem);
                albumItem.prepend(linkElement);
            });
    }
    return albumsWrapper;
}


//perpanaudojama funkcija
// function createDataList(data, name, dataTitle, url) {
//     const wrapper = document.createElement('div');
//     wrapper.classList.add(dataTitle + '-wrapper');
  
//     const wrapperTitle = document.createElement('h2');
//     wrapper.append(wrapperTitle);
//     wrapperTitle.textContent = `No ${dataTitle} :(`;
    
//     if (data.length > 0) {
//       wrapperTitle.textContent = `${dataTitle} of ${name}:`;
//       const list = document.createElement('ul');
    
//       data.forEach(item => {
//         const { title } = item;
//         const listItem = document.createElement('li');
//         const itemLink = document.createElement('a');
//         itemLink.href = './' + url;
//         itemLink.textContent = title;
    
//         listItem.append(itemLink);
//         list.append(listItem);
//       })
    
//       wrapper.append(list);
//     }
    
//     return wrapper;
//   }