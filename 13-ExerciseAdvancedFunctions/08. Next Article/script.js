function getArticleGenerator(articles) {
    const arrOfArticles = articles;

    const contentBox = document.getElementById('content');

    function getArticleGenerator() {
        const article = document.createElement('article');
        if (arrOfArticles.length === 0){
            return;
        }
        article.textContent = arrOfArticles.shift();
        contentBox.appendChild(article);
    }
    return getArticleGenerator;
}
let test = getArticleGenerator;
