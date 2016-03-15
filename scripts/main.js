var counter = 0;

var likes = document.querySelector('.likeButton');
var doReset = document.querySelector('.resetButton');

likes.addEventListener('click', addLikes);
doReset.addEventListener('click', resetNow);

function addLikes(){
    counter++;
    if (counter === 1) {
        likes.innerHTML = counter + ' Like';
    } else {
        likes.innerHTML = counter + ' Likes';
    }
}

function resetNow() {
    counter = 0;
    likes.innerHTML = '0 Likes';
}