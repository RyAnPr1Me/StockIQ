# Stock Market Analysis Backend

from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import requests
import logging
from sentiment_analysis import analyze_sentiment  # Assuming a separate module for sentiment analysis
from ai_market_analysis import get_market_insights  # Assuming a separate module for AI market insights

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

# API Endpoints

@app.route('/stock-data', methods=['GET'])
def get_stock_data():
    try:
        response = requests.get('https://api.example.com/stock')  # Replace with actual stock API
        response.raise_for_status()
        return jsonify(response.json()), 200
    except Exception as e:
        logging.error(f"Error fetching stock data: {e}")
        return jsonify({"error": "Failed to fetch stock data"}), 500

@app.route('/sentiment', methods=['GET'])
def get_sentiment():
    try:
        news_data = fetch_news_data()  # Function to fetch news data
        sentiment_score = analyze_sentiment(news_data)
        return jsonify({"sentiment": sentiment_score}), 200
    except Exception as e:
        logging.error(f"Error performing sentiment analysis: {e}")
        return jsonify({"error": "Failed to analyze sentiment"}), 500

@app.route('/portfolio', methods=['GET'])
def get_portfolio():
    try:
        portfolio_data = pd.read_csv('portfolio.csv')
        insights = analyze_portfolio(portfolio_data)  # Function to analyze portfolio
        return jsonify(insights), 200
    except Exception as e:
        logging.error(f"Error reading portfolio data: {e}")
        return jsonify({"error": "Failed to read portfolio data"}), 500

@app.route('/ai-market-analysis', methods=['GET'])
def ai_market_analysis():
    try:
        insights = get_market_insights()  # Function to get AI market insights
        return jsonify(insights), 200
    except Exception as e:
        logging.error(f"Error fetching AI market insights: {e}")
        return jsonify({"error": "Failed to fetch market insights"}), 500

# Server Initialization
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
