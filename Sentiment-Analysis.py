# Sentiment Analysis API

from flask import Flask, request, jsonify
import requests
import spacy

app = Flask(__name__)
nlp = spacy.load("en_core_web_sm")

# Function to fetch news data
def fetch_news(ticker):
    # Placeholder for news API URL
    url = f"https://newsapi.org/v2/everything?q={ticker}&apiKey=YOUR_API_KEY"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()['articles']
    else:
        return []

# Function to analyze sentiment
def analyze_sentiment(text):
    doc = nlp(text)
    sentiment_score = doc._.polarity  # Assuming polarity is added to the pipeline
    return sentiment_score

# Function to convert sentiment score to recommendation
def sentiment_to_recommendation(score):
    if score > 0.1:
        return "Buy"
    elif score < -0.1:
        return "Sell"
    else:
        return "Hold"

@app.route('/sentiment', methods=['POST'])
def sentiment():
    data = request.json
    ticker = data.get('ticker')
    if not ticker:
        return jsonify({"error": "Missing ticker"}), 400

    articles = fetch_news(ticker)
    if not articles:
        return jsonify({"error": "No articles found"}), 404

    sentiment_scores = []
    for article in articles:
        score = analyze_sentiment(article['title'] + " " + article['description'])
        sentiment_scores.append(score)

    average_score = sum(sentiment_scores) / len(sentiment_scores)
    recommendation = sentiment_to_recommendation(average_score)

    return jsonify({"ticker": ticker, "recommendation": recommendation})

if __name__ == '__main__':
    app.run(debug=True)
