# Stock Portfolio Manager

// Function to load portfolio data from a CSV file
async function loadPortfolioData() {
    try {
        const response = await fetch('portfolio.csv');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.text();
        return parseCSV(data);
    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}

// Function to parse CSV data into an array of stock objects
function parseCSV(data) {
    const rows = data.split('\n').slice(1);
    return rows.map(row => {
        const [symbol, quantity, purchasePrice, currentPrice] = row.split(',');
        return {
            symbol,
            quantity: parseInt(quantity),
            purchasePrice: parseFloat(purchasePrice),
            currentPrice: parseFloat(currentPrice),
            profitLoss: calculateProfitLoss(parseFloat(purchasePrice), parseFloat(currentPrice), parseInt(quantity)),
            percentageChange: calculatePercentageChange(parseFloat(purchasePrice), parseFloat(currentPrice))
        };
    });
}

// Function to calculate profit or loss
function calculateProfitLoss(purchasePrice, currentPrice, quantity) {
    return (currentPrice - purchasePrice) * quantity;
}

// Function to calculate percentage change
function calculatePercentageChange(purchasePrice, currentPrice) {
    return ((currentPrice - purchasePrice) / purchasePrice) * 100;
}

// Function to generate AI-driven optimization suggestions
function generateSuggestions(portfolio) {
    return portfolio.map(stock => {
        const { profitLoss, percentageChange } = stock;
        if (percentageChange > 10) return 'Sell';
        if (percentageChange < -10) return 'Buy';
        return 'Hold';
    });
}

// Function to update the UI with portfolio data
function updateUI(portfolio) {
    const portfolioContainer = document.getElementById('portfolio');
    portfolioContainer.innerHTML = '';
    portfolio.forEach(stock => {
        const stockElement = document.createElement('div');
        stockElement.innerHTML = `
            <h3>${stock.symbol}</h3>
            <p>Quantity: ${stock.quantity}</p>
            <p>Purchase Price: $${stock.purchasePrice.toFixed(2)}</p>
            <p>Current Price: $${stock.currentPrice.toFixed(2)}</p>
            <p>Profit/Loss: $${stock.profitLoss.toFixed(2)}</p>
            <p>Percentage Change: ${stock.percentageChange.toFixed(2)}%</p>
            <p>Suggestion: ${generateSuggestions(portfolio)[portfolio.indexOf(stock)]}</p>
        `;
        portfolioContainer.appendChild(stockElement);
    });
}

// Initialization function
async function init() {
    const portfolio = await loadPortfolioData();
    if (portfolio) {
        updateUI(portfolio);
    }
}

// Run initialization on page load
window.onload = init;
