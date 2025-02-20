# Stock Screener Implementation

// Function to handle form submission
document.getElementById('screener-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture filter input values
    const peRatio = document.getElementById('pe-ratio').value;
    const marketCap = document.getElementById('market-cap').value;
    const dividendYield = document.getElementById('dividend-yield').value;

    // Prepare filter parameters
    const filters = {
        peRatio: peRatio,
        marketCap: marketCap,
        dividendYield: dividendYield
    };

    // Send filter parameters to backend
    fetch('/api/stocks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filters)
    })
    .then(response => response.json())
    .then(data => {
        // Update results container with filtered stocks
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results

        data.stocks.forEach(stock => {
            const stockElement = document.createElement('div');
            stockElement.classList.add('stock-item');
            stockElement.innerHTML = `
                <h3>${stock.name}</h3>
                <p>P/E Ratio: ${stock.peRatio}</p>
                <p>Market Cap: ${stock.marketCap}</p>
                <p>Dividend Yield: ${stock.dividendYield}</p>
            `;
            resultsContainer.appendChild(stockElement);
        });

        // Smooth transition for displaying results
        resultsContainer.style.opacity = 0;
        setTimeout(() => {
            resultsContainer.style.opacity = 1;
        }, 100);
    })
    .catch(error => console.error('Error fetching stocks:', error));
});
