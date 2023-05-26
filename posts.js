async function init() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_expand=user&&_embed=comments`);
    const postsData = await response.json();

const content = document.querySelector('#content');
content.append(createPostsList(postsData));
}
init();

function createPostsList(posts) {
    
    const postsList = document.createElement('ul');
     postsList.classList.add('posts-list');

            posts.forEach(post => {
                
                const postsListElement = document.createElement('li');
                postsListElement.classList.add('post-element');

                const postLinkElement = document.createElement('a');

                postLinkElement.href = './post.html';
                const title = post.title;
                postLinkElement.textContent = `Title: "${title}"`;


                const userLinkElement = document.createElement('a');
                userLinkElement.href = './user.html';
                const userName = post.user.name;
                userLinkElement.textContent = `Author: ${userName}`;

            
                
                console.log(post.comments.length)
                const commentsLengthElement = document.createElement('span');
                const commentsLength = post.comments.length;
                commentsLengthElement.textContent = ` Comments: ${commentsLength};`;

                postsListElement.append(postLinkElement, commentsLengthElement, ' ', userLinkElement);
                postsList.append(postsListElement);
            });
            return postsList;
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
