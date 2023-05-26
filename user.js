async function init() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userData = await response.json();

    const content = document.querySelector('#content');
    const userInformationList = getUserData(userData);
    content.append(userInformationList);
}

function getUserData(data) {

    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Users Information';

    const userDataContainer = document.createElement('div');
    userDataContainer.classList.add('user-data-container');

    const user = document.createElement('ol');
    user.classList.add('user-data-list');
    
    
    data.forEach(userData => {
       
        
        const fullName = userData.name;
        const nameSplit = fullName.split(' ');
        const firstName = nameSplit[0];
        const username = userData.username;
        const email = userData.email;
        const phone = userData.phone;
        const website = userData.website;
        const companyName = userData.company.name;
        
        const userFullName = document.createElement('li');
        userFullName.classList.add('user-full-name');
        userFullName.textContent = `Name: ${fullName}`;

        const firstNameUsername = document.createElement('span');
        firstNameUsername.textContent = `Name/username: ${firstName}/${username}`;
        firstNameUsername.style.display = 'block';

        const userEmail = document.createElement('span');
        userEmail.textContent = `Email: ${email}`;
        userEmail.style.display = 'block';

        const userPhone = document.createElement('span');
        userPhone.textContent = `Phone: ${phone}`;
        userPhone.style.display = 'block';

        const userWebsite = document.createElement('span');
        userWebsite.textContent = `Website: ${website}`;
        userWebsite.style.display = 'block';

        const userCompanyName = document.createElement('span');
        userCompanyName.textContent = `Company name: ${companyName}`;
        userCompanyName.style.display = 'block';
      
        userFullName.append(firstNameUsername, userEmail, userPhone, userWebsite, userCompanyName);
        user.append(userFullName);
        userDataContainer.append(user);
        content.append(title, userDataContainer);
        

    });
    return userWrapper;
}

init();