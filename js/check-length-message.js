let commentField = document.querySelector('#message');
let submitButton = document.querySelector('form .btn');

submitButton.onclick = function() {
  if ((commentField.value.length < 8) || (commentField.value.length > 200)) {
    commentField.classList.add('warning');
    submitButton.disabled = true;
  }
}

commentField.oninput = function() {
  if ((commentField.value.length > 8)&&(commentField.value.length < 200)&&(commentField.classList.contains('warning'))) {
    commentField.classList.remove('warning');
    submitButton.disabled = false;
  }
}