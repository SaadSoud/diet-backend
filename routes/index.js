const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const caloriesController = require('../controllers/caloriesController');
const dietPlanController = require('../controllers/dietPlanController');
const remindersController = require('../controllers/remindersController');

// Test endpoint
router.get('/', (req, res) => {
  res.send('Backend is live!');
});

// Chat endpoint
router.post('/chat', chatController.handleChatMessage);

// Calories endpoint
router.post('/calories', caloriesController.estimateCalories);

// Diet plan endpoint
router.post('/diet-plan', dietPlanController.generateDietPlan);

// Reminders endpoint
router.post('/reminders', remindersController.setReminder);

module.exports = router;
