async function init() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_expand=user`);
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

                console.log(post.user.name)

                const userLinkElement = document.createElement('a');
                userLinkElement.href = './user.html';
                const userName = post.user.name;
                userLinkElement.textContent = `Author: ${userName}`;

            
                postsListElement.append(postLinkElement, userLinkElement);
                postsList.append(postsListElement);
            });
            return postsList;
        }
init();
