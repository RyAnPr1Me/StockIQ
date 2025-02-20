# Financial News Aggregator

// Function to fetch finance-related news articles
async function fetchFinanceNews() {
    const apiKey = '9420f405ef5d4846ac74f7c313470f4b';
    const url = `https://newsapi.org/v2/everything?q=earnings&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Function to display news articles in the UI
function displayNews(articles) {
    const newsSection = document.getElementById('news');
    newsSection.innerHTML = ''; // Clear existing news

    articles.forEach(article => {
        // Create a news card
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';

        // Create headline element
        const headline = document.createElement('h3');
        headline.textContent = article.title;

        // Create summary element
        const summary = document.createElement('p');
        summary.textContent = article.description;

        // Create link to full article
        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read more';
        link.target = '_blank';

        // Append elements to the news card
        newsCard.appendChild(headline);
        newsCard.appendChild(summary);
        newsCard.appendChild(link);

        // Append news card to the news section
        newsSection.appendChild(newsCard);
    });
}

// Call the function to fetch and display news
fetchFinanceNews();
