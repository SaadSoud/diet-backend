# Diet & Fitness App Backend

A Flask-based backend for a mobile diet & fitness app that handles user messages, generates calorie estimates, provides personalized diet plans, and manages reminders.

## API Endpoints

### 1. Test Endpoint
- **URL:** `/`
- **Method:** `GET`
- **Response:** "Flask backend is live!"

### 2. Chat Endpoint
- **URL:** `/chat`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "message": "What's a good breakfast for losing weight?"
  }
  ```
- **Response:**
  ```json
  {
    "response": "For a healthy breakfast that supports weight loss, try oatmeal with fruits and nuts, Greek yogurt with berries, or eggs with whole grain toast."
  }
  ```

### 3. Calories Estimation Endpoint
- **URL:** `/calories`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "ingredients": "chicken, rice, olive oil"
  }
  ```
- **Response:**
  ```json
  {
    "calories": "620 kcal",
    "details": {
      "chicken": 300,
      "rice": 250,
      "olive oil": 70
    }
  }
  ```

### 4. Diet Plan Endpoint
- **URL:** `/diet-plan`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "weight": 75,
    "height": 175,
    "goal": "lose weight",
    "country": "USA"
  }
  ```
- **Response:**
  ```json
  {
    "stepsGoal": 8000,
    "breakfast": [
      {
        "meal": "Oats with banana",
        "cost": "Low",
        "prepTime": "5 mins"
      },
      ...
    ],
    "lunch": [...],
    "dinner": [...]
  }
  ```

### 5. Reminders Endpoint
- **URL:** `/reminders`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "type": "water",
    "time": "12:00 PM"
  }
  ```
- **Response:**
  ```json
  {
    "status": "Reminder set successfully",
    "reminder": {
      "type": "water",
      "time": "12:00 PM"
    }
  }
  ```

## Setup and Run

This application runs on Flask and requires Python 3.x.

1. Install the dependencies:
   ```
   pip install flask flask-cors
   ```

2. Run the server:
   ```
   python main.py
   ```
   
3. Or with Gunicorn:
   ```
   gunicorn --bind 0.0.0.0:5000 --reuse-port --reload main:app
   ```

The server will start on port 5000.

## Features

- Smart health assistant powered by AI (OpenRouter)
- Calorie estimator for food ingredients
- Personalized diet plans based on user goals and country
- Reminder system for water, meals, and exercise

## Future Enhancements

- Expanded food calorie database
- More personalized diet plans based on user preferences
- Integration with nutrition databases for precise calorie counting
- Persistent storage for reminders and user data