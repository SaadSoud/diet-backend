const dietPlansData = require('../data/dietPlans');

/**
 * Generates a personalized diet plan based on user information
 */
exports.generateDietPlan = (req, res) => {
  try {
    const { weight, height, goal, country } = req.body;
    
    // Validate required fields
    if (!weight || !height || !goal) {
      return res.status(400).json({ 
        error: 'Missing required information',
        message: 'Weight, height, and goal are required'
      });
    }
    
    // Calculate BMI to determine appropriate diet plan
    const bmi = calculateBMI(weight, height);
    const userCountry = country || 'default';
    const userGoal = goal.toLowerCase();
    
    // Generate steps goal based on BMI and goal
    const stepsGoal = generateStepsGoal(bmi, userGoal);
    
    // Get diet suggestions based on country and goal
    const dietSuggestions = getDietSuggestions(userCountry, userGoal, bmi);
    
    res.json({
      stepsGoal,
      ...dietSuggestions
    });
    
  } catch (error) {
    console.error('Diet plan generation error:', error);
    res.status(500).json({ error: 'Failed to generate diet plan', message: error.message });
  }
};

/**
 * Calculates BMI based on weight (kg) and height (cm)
 */
function calculateBMI(weight, height) {
  // Convert height to meters
  const heightInMeters = height / 100;
  // BMI formula: weight (kg) / (height (m))^2
  return weight / (heightInMeters * heightInMeters);
}

/**
 * Generates recommended daily steps based on BMI and goal
 */
function generateStepsGoal(bmi, goal) {
  let baseSteps = 7500;
  
  // Adjust based on BMI
  if (bmi < 18.5) {
    // Underweight
    baseSteps = 6500;
  } else if (bmi >= 25 && bmi < 30) {
    // Overweight
    baseSteps = 8500;
  } else if (bmi >= 30) {
    // Obese
    baseSteps = 9500;
  }
  
  // Adjust based on goal
  if (goal.includes('lose weight') || goal.includes('weight loss')) {
    baseSteps += 1500;
  } else if (goal.includes('muscle') || goal.includes('strength')) {
    baseSteps -= 500;
  } else if (goal.includes('maintain')) {
    // Keep base steps
  }
  
  return baseSteps;
}

/**
 * Gets diet suggestions based on country, goal, and BMI
 */
function getDietSuggestions(country, goal, bmi) {
  // Look for country-specific plan
  let countryPlan = dietPlansData[country.toLowerCase()];
  
  // If no country-specific plan, use default
  if (!countryPlan) {
    countryPlan = dietPlansData.default;
  }
  
  // Select goal-specific plan
  let goalPlan;
  if (goal.includes('lose weight')) {
    goalPlan = countryPlan.weightLoss;
  } else if (goal.includes('muscle') || goal.includes('strength')) {
    goalPlan = countryPlan.muscleGain;
  } else if (goal.includes('maintain')) {
    goalPlan = countryPlan.maintenance;
  } else {
    // Default to balanced plan if goal is unclear
    goalPlan = countryPlan.balanced;
  }
  
  return {
    breakfast: goalPlan.breakfast,
    lunch: goalPlan.lunch,
    dinner: goalPlan.dinner
  };
}
