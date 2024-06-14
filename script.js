// script.js
// Misalnya, untuk menambahkan like pada post
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
    const likeButton = post.querySelector('.like-button');
    let likes = parseInt(post.querySelector('.like-count').textContent);

    likeButton.addEventListener('click', () => {
        if (!likeButton.classList.contains('liked')) {
            likeButton.classList.add('liked');
            likes++;
        } else {
            likeButton.classList.remove('liked');
            likes--;
        }
        post.querySelector('.like-count').textContent = likes;
    });
});
