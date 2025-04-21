from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import os
import requests

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "replit_dev_key_12345")
CORS(app)  # Enable cross-origin requests from frontend

# OpenRouter API key
OPENROUTER_API_KEY = "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"

# Test route
@app.route("/")
def home():
    return "Flask backend is live!"

# Chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    
    try:
        # Set up OpenRouter API request
        headers = {
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json"
        }
        
        body = {
            "model": "openai/gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": "You are a helpful health and fitness assistant. Provide concise, practical advice about nutrition, diet plans, exercise, and healthy lifestyle choices."},
                {"role": "user", "content": user_message}
            ]
        }
        
        # Make the API request
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions", 
            headers=headers, 
            json=body,
            timeout=10  # Set a timeout to avoid hanging
        )
        
        # Check if the request was successful
        if response.status_code == 200:
            api_response = response.json()
            reply = api_response["choices"][0]["message"]["content"]
            logging.debug(f"OpenRouter API response: {api_response}")
        else:
            logging.error(f"OpenRouter API error: {response.status_code} - {response.text}")
            # Fallback to local response if API fails
            if "dinner" in user_message.lower():
                dinner_suggestions = [
                    "For a healthy dinner, try grilled chicken with roasted vegetables and quinoa.",
                    "How about a vegetable stir-fry with tofu and brown rice for dinner?",
                    "A light dinner option could be baked fish with steamed greens and sweet potatoes.",
                    "Consider a hearty vegetable soup with whole grain bread for dinner tonight.",
                    "A Mediterranean dinner of grilled fish, Greek salad, and a small portion of whole grain pasta is nutritious."
                ]
                import random
                reply = random.choice(dinner_suggestions)
            else:
                reply = f"You asked: '{user_message}'. Here's a healthy tip: Aim for a balanced diet with plenty of vegetables, lean proteins, and whole grains. And don't forget to stay hydrated! 💧"
    
    except Exception as e:
        logging.error(f"Error in chat endpoint: {str(e)}")
        # Fallback response
        reply = "I'm having trouble connecting to my health knowledge database right now. Please try again in a moment."
    
    return jsonify({"response": reply})

# Calorie estimation endpoint
@app.route("/calories", methods=["POST"])
def calories():
    data = request.get_json()
    ingredients = data.get("ingredients", "").lower()

    # Mock calorie logic (replace with AI later)
    calorie_map = {
        "chicken": 300,
        "rice": 250,
        "olive oil": 70,
        "egg": 70,
        "milk": 100
    }

    total = 0
    details = {}

    for item in ingredients.split(","):
        item = item.strip()
        calories = calorie_map.get(item, 50)  # Default calorie if unknown
        total += calories
        details[item] = calories

    return jsonify({
        "calories": f"{total} kcal",
        "details": details
    })

# Diet plan generation endpoint
@app.route("/diet-plan", methods=["POST"])
def diet_plan():
    data = request.get_json()
    goal = data.get("goal", "maintain weight").lower()
    country = data.get("country", "USA").lower()

    # Simplified diet logic (could add localization later)
    breakfast = [
        {"meal": "Oats with banana", "cost": "Low", "prepTime": "5 mins"},
        {"meal": "Boiled eggs with toast", "cost": "Medium", "prepTime": "7 mins"},
        {"meal": "Smoothie bowl", "cost": "High", "prepTime": "10 mins"}
    ]

    lunch = [
        {"meal": "Grilled chicken with veggies", "cost": "Medium", "prepTime": "15 mins"},
        {"meal": "Daal with rice", "cost": "Low", "prepTime": "10 mins"},
        {"meal": "Beef stir-fry with salad", "cost": "High", "prepTime": "20 mins"}
    ]

    dinner = [
        {"meal": "Baked fish with greens", "cost": "High", "prepTime": "15 mins"},
        {"meal": "Chicken soup", "cost": "Low", "prepTime": "10 mins"},
        {"meal": "Vegetable wrap", "cost": "Medium", "prepTime": "8 mins"}
    ]

    steps_goal = 8000 if goal == "lose weight" else 6000

    return jsonify({
        "stepsGoal": steps_goal,
        "breakfast": breakfast,
        "lunch": lunch,
        "dinner": dinner
    })

# Reminder endpoint (mocked)
reminders_store = []

@app.route("/reminders", methods=["POST"])
def reminders():
    data = request.get_json()
    reminder_type = data.get("type", "water")
    reminder_time = data.get("time", "12:00 PM")

    reminder = {
        "type": reminder_type,
        "time": reminder_time
    }

    reminders_store.append(reminder)
    return jsonify({"status": "Reminder set successfully", "reminder": reminder})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)