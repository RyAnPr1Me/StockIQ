# StockIQ – Real-Time Stock Analysis Platform

## Overview
**StockIQ** is a comprehensive **real-time stock analysis platform** designed to provide investors and traders with live market data, AI-driven insights, sentiment analysis, and portfolio management tools. The platform features a clean, intuitive UI and integrates seamlessly with various data sources to deliver actionable financial information.

## Features
- **Real-Time Market Data**: Fetches live stock prices and market indicators.
- **AI-Powered Sentiment Analysis**: Analyzes financial news and social media to gauge market sentiment.
- **Advanced Portfolio Management**: Offers tools for tracking investments, assessing performance, and optimizing portfolios.
- **Technical Indicators**: Monitors key indicators such as RSI, MACD, and moving averages.
- **Customizable Stock Screener**: Filters stocks based on criteria like P/E ratio, market cap, and dividend yield.
- **Real-Time Alerts**: Notifies users of significant market movements and events.
- **Responsive Design**: Ensures accessibility across devices with a mobile-friendly interface and dark mode.
- **AI-Generated Recommendations**: Provides Buy/Hold/Sell suggestions based on data analysis.

## Project Structure
```
StockIQ/
├── backend/
│   ├── server.py          # Handles API requests and data processing
│   ├── portfolio.csv      # User portfolio data
│   ├── requirements.txt   # Backend dependencies
├── frontend/
│   ├── index.html         # Main UI
│   ├── app.js             # UI logic and API interactions
│   ├── styles.css         # Styling
│   ├── portfolio.js       # Portfolio management scripts
├── README.md              # Project documentation
├── .env                   # Environment variables (e.g., API keys)
```

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/StockIQ.git
cd StockIQ
```

### 2. Set Up the Backend
Ensure Python is installed. Navigate to the `backend` directory and install dependencies:
```sh
cd backend
pip install -r requirements.txt
```

### 3. Configure Environment Variables
Create a `.env` file in the `backend` directory with:
```
API_KEY=your_stock_market_api_key
```

### 4. Run the Backend Server
```sh
python server.py
```

The server will start at `http://localhost:5000`.

### 5. Launch the Frontend
Open `index.html` in a browser or use a simple HTTP server:
```sh
cd frontend
python -m http.server 8000
```

Access the platform at `http://localhost:8000`.

## API Endpoints

| Endpoint             | Method | Description                                         |
|----------------------|--------|-----------------------------------------------------|
| `/stock-data`        | GET    | Retrieves real-time stock market data               |
| `/sentiment`         | GET    | Conducts AI-driven sentiment analysis               |
| `/portfolio`         | GET    | Manages and analyzes user portfolio data            |
| `/ai-market-analysis`| GET    | Delivers AI-powered market insights                 |

## Data Sources
- **Market Data**: Integrated via external APIs (e.g., Alpha Vantage, Yahoo Finance)
- **User Portfolio**: Stored and managed through `portfolio.csv`
- **Sentiment Analysis**: Utilizes financial news and social media feeds

## Contributing
Contributions are welcome! Feel free to fork the repository, report issues, or submit pull requests to enhance StockIQ.

## License
This project is licensed under the **Apache License 2.0**. See the `LICENSE` file for details.

