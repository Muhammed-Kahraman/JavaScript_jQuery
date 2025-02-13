window.onload = function() {
    let new_article = document.getElementById('new_article');

    if (new_article) {
        new_article.onclick = function() {
            window.location.href = 'add-new-article.html';
        }
    }



}