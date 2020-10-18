let articles = document.querySelectorAll('.article-preview');
let filter = document.querySelector('.custom-select__list');

filter.onchange = function() {
  for (let article of articles) {
    if ((article.dataset.category !== filter.value) && (filter.value !== 'all')) {
      article.parentNode.classList.add('hidden');
    } else {
      article.parentNode.classList.remove('hidden');
    }
  }
}

