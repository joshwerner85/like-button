var counter = 0;

var likes = document.querySelector('button');

likes.addEventListener('click',addLikes);

// button.addEventListener('click', addLikes);

function addLikes(){
	counter++
	likes.innerHTML = counter + ' Likes';
}



 

