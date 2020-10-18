let like = document.querySelector('.block-like__like');
let likesNumber = document.querySelector('.block-like__amount');

like.onclick = function () {
  if (like.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle('added');
};