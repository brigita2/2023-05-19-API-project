async function init() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?_expand=user&&_embed=photos`);
    const albumData = await response.json();

    const content = document.querySelector('#content');
    content.append(createAlbums(albumData));
}

function createAlbums(albums) {
    const albumWrapper = document.createElement('div');
    albumWrapper.classList.add('album-wrapper');

    albums.forEach(album => {
        
        const titleElement = document.createElement('h3');
        titleElement.classList.add('title');
        const albumTitle = album.title;
        
        
        const authorElement = document.createElement('h5');
        authorElement.classList.add('author');
        const albumAuthor = album.user.name;
        authorElement.textContent = albumAuthor;
        
        const photosNumber = document.createElement('span');
        photosNumber.classList.add('photos-number');
        const photosNumberData = album.photos.length;
        photosNumber.textContent = photosNumberData;
        
        titleElement.textContent = `${albumTitle} (${photosNumberData} pictures)`;

        const pictureElement = document.createElement('img');
        pictureElement.classList.add('picture');
        const url = album.photos[0].url;
        pictureElement.src = url;
        pictureElement.style.width = '300px';

        const linkElement = document.createElement('a');
        linkElement.href = './album.html';

        linkElement.append(pictureElement);


        console.log(album.photos[0].url);
        

        albumWrapper.append(titleElement, authorElement, linkElement);
    });

    return albumWrapper;
}

init();