const foodCaloriesData = require('../data/foodCalories');

/**
 * Estimates calories based on food ingredients
 * Uses a simple lookup from the food calorie database
 */
exports.estimateCalories = (req, res) => {
  try {
    const { ingredients } = req.body;
    
    if (!ingredients) {
      return res.status(400).json({ error: 'Ingredients are required' });
    }

    // Parse ingredients - can be a string or array
    let ingredientsList = [];
    if (typeof ingredients === 'string') {
      ingredientsList = ingredients.split(',').map(item => item.trim().toLowerCase());
    } else if (Array.isArray(ingredients)) {
      ingredientsList = ingredients.map(item => item.toLowerCase());
    } else {
      return res.status(400).json({ error: 'Ingredients must be a string or array' });
    }

    // Calculate calories for each ingredient
    let totalCalories = 0;
    const details = {};

    ingredientsList.forEach(ingredient => {
      const calorieInfo = findIngredientCalories(ingredient);
      if (calorieInfo) {
        details[ingredient] = calorieInfo.calories;
        totalCalories += calorieInfo.calories;
      } else {
        // Use an estimate if ingredient not found
        const estimatedCalories = 100;  // Default estimate
        details[ingredient] = estimatedCalories;
        totalCalories += estimatedCalories;
      }
    });

    res.json({
      calories: `${totalCalories} kcal`,
      details
    });
    
  } catch (error) {
    console.error('Calories estimation error:', error);
    res.status(500).json({ error: 'Failed to estimate calories', message: error.message });
  }
};

/**
 * Finds an ingredient in the food calorie database
 * Uses partial matching to find the closest match
 */
function findIngredientCalories(ingredient) {
  // Exact match
  if (foodCaloriesData[ingredient]) {
    return foodCaloriesData[ingredient];
  }
  
  // Partial match - find ingredient that contains this keyword
  const keys = Object.keys(foodCaloriesData);
  for (const key of keys) {
    if (key.includes(ingredient) || ingredient.includes(key)) {
      return foodCaloriesData[key];
    }
  }
  
  return null;
}
