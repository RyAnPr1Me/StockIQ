# Interactive Real-Time Stock Chart

```javascript
// Import Chart.js library
const ctx = document.getElementById('stockChart').getContext('2d');

// Initialize the chart
const stockChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Time labels for the x-axis
        datasets: [
            {
                label: 'Stock Price',
                data: [], // Stock price data
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
            {
                label: 'RSI',
                data: [], // RSI data
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
            },
            {
                label: 'MACD',
                data: [], // MACD data
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
            },
            {
                label: 'Moving Average',
                data: [], // Moving average data
                borderColor: 'rgba(255, 206, 86, 1)',
                fill: false,
            }
        ]
    },
    options: {
        responsive: true,
        animation: {
            duration: 500, // Smooth animations
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'minute' // Time unit for x-axis
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Time'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        legend: {
            display: true,
            position: 'top',
        }
    }
});

// Function to update chart data dynamically
function updateChart(newData) {
    // Update datasets with new data
    stockChart.data.labels.push(newData.time);
    stockChart.data.datasets[0].data.push(newData.stockPrice);
    stockChart.data.datasets[1].data.push(newData.rsi);
    stockChart.data.datasets[2].data.push(newData.macd);
    stockChart.data.datasets[3].data.push(newData.movingAverage);
    
    // Update the chart
    stockChart.update();
}
