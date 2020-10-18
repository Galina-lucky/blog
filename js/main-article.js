//СЧЕТЧИК ЛАЙКОВ
let like = document.querySelector('.block-like__like');
let likesNumber = document.querySelector('.block-like__amount');

like.onclick = function () {
  if (like.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle('added');
}

//КНОПКА [ОСТАВИТЬ КОММЕНТАРИЙ]

let formComment = document.querySelector('.form-comment');
let commentsList = document.querySelector('.comments-list');

formComment.onsubmit = function(evt) {
  evt.preventDefault();
let newComment = document.createElement('li');
newComment.classList.add('comments-list__item');

let userInfo = document.createElement('div');
userInfo.classList.add('comments-list__user');

let userPhoto = document.createElement('img');
userPhoto.classList.add('comments-list__foto');

let userName = document.createElement('span');
userName.classList.add('comments-list__name');
userName.textContent = document.querySelector('#name').value;
document.querySelector('#name').value='';

let newCommentText = document.createElement('p');
newCommentText.classList.add('comments-list__field');
newCommentText.textContent = document.querySelector('textarea').value;
document.querySelector('textarea').value='';

userInfo.append(userPhoto);
userInfo.append(userName);
newComment.append(userInfo);
newComment.append(newCommentText);
commentsList.append(newComment);
}