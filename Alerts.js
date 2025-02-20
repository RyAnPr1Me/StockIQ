# Stock Event Monitor

// Function to poll the backend API for stock updates
async function pollStockUpdates() {
    const response = await fetch('https://api.example.com/stocks');
    const data = await response.json();
    checkForAlerts(data);
}

// Function to check for significant stock events
function checkForAlerts(stockData) {
    stockData.forEach(stock => {
        if (isPriceChangeSignificant(stock) || isTechnicalSignalTriggered(stock)) {
            displayAlert(stock);
        }
    });
}

// Function to determine if the price change is significant
function isPriceChangeSignificant(stock) {
    const priceChange = ((stock.currentPrice - stock.previousPrice) / stock.previousPrice) * 100;
    return Math.abs(priceChange) >= 5; // 5% threshold
}

// Function to determine if a technical signal is triggered
function isTechnicalSignalTriggered(stock) {
    return stock.technicalIndicator > stock.technicalThreshold; // Example condition
}

// Function to display alert
function displayAlert(stock) {
    const alertSection = document.getElementById('alerts');
    const alertMessage = document.createElement('div');
    alertMessage.className = 'alert';
    alertMessage.innerText = `Alert: ${stock.symbol} has significant movement!`;
    
    // Append alert to the alerts section
    alertSection.appendChild(alertMessage);
    
    // Optionally log the alert for review
    logAlert(stock);
    
    // Dismiss option
    const dismissButton = document.createElement('button');
    dismissButton.innerText = 'Dismiss';
    dismissButton.onclick = () => alertSection.removeChild(alertMessage);
    alertMessage.appendChild(dismissButton);
}

// Function to log alerts for review
function logAlert(stock) {
    console.log(`Logged Alert: ${stock.symbol} - ${stock.currentPrice}`);
}

// Start polling for stock updates every 5 seconds
setInterval(pollStockUpdates, 5000);
