const socket = window.io();

const likeButton = document.querySelector('#likeIcon')
likeButton.addEventListener('click', (e) =>{
  socket.emit('likePost')
});

const upateLike = (likesUpdated) => {
  const currentLikes = document.querySelector('#currentLikes')
  currentLikes.innerHTML = likesUpdated;
};

const starButton = document.querySelector('#starIcon')
starButton.addEventListener('click', (e) =>{
  socket.emit('starPost');
});

const updateStar = (startUpdated) => {
  const currentStars = document.querySelector('#currentStars');
  currentStars.innerHTML = startUpdated;
}

socket.on('likes', (contLik) => upateLike(contLik))
socket.on('stars', (countStar) => updateStar(countStar));