document.getElementById('article-form').style.display = 'none'; // Hides the article form

const articles = [
    { 
        title: "Article 1", 
        link: "https://example.com", 
        content: "Content of Article 1", 
        author: "Author 1" 
    },
    { 
        title: "Article 1", 
        link: "https://example.com", 
        content: "Content of Article 1", 
        author: "Author 1" 
    },
    { 
        title: "Article 1", 
        link: "https://example.com", 
        content: "Content of Article 1", 
        author: "Author 1" 
    },
    { 
        title: "Article 1", 
        link: "https://example.com", 
        content: "Content of Article 1", 
        author: "Author 1" 
    },
    { 
        title: "Article 1", 
        link: "https://example.com", 
        content: "Content of Article 1", 
        author: "Author 1" 
    },
    { 
        title: "Article 1", 
        link: "https://example.com", 
        content: "Content of Article 1", 
        author: "Author 1" 
    },
    // Add more articles as needed
];

function getArticles() {
    return JSON.parse(localStorage.getItem('articles')) || [];
}

function displayArticles() {
    const articleList = document.getElementById('article-list');
    articleList.innerHTML = ''; // Clear existing articles
    articles.forEach(article => {
        const articleDiv = document.createElement('article');
        articleDiv.innerHTML = `
            <a href="${article.link}" target="_blank">
                <img src="placeholder.jpg" alt="Placeholder Image">
                <h2>${article.title}</h2>
            </a>
            <p>${convertUrlsToLinks(article.content)}</p>
            <p><b>Author:</b> ${article.author}</p>
        `;
        articleList.appendChild(articleDiv);
    });
}



// Modify addArticle function to include link
function addArticle(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const link = document.getElementById('link').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    const newArticle = { title, link, content, author };
    const articles = getArticles();
    articles.push(newArticle);
    localStorage.setItem('articles', JSON.stringify(articles));

    document.getElementById('article-form').reset();
    displayArticles();
}


// Add removeArticle function
function removeArticle(index) {
    const articles = getArticles();
    articles.splice(index, 1);
    localStorage.setItem('articles', JSON.stringify(articles));
    displayArticles();
}

document.getElementById('content').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});


function extractFirstUrl(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const matches = text.match(urlRegex);
    return matches ? matches[0] : '#';
}

function convertUrlsToLinks(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, url => `<a href="${url}" target="_blank">${url}</a>`);
}

window.onload = displayArticles;
