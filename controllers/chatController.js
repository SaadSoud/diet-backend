const axios = require('axios');

/**
 * Handles chat messages and returns health-related responses
 * Can integrate with external AI APIs if API key is provided
 */
exports.handleChatMessage = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get API key from environment variable
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    // Check if we can use AI integration
    if (OPENAI_API_KEY || OPENROUTER_API_KEY) {
      try {
        let response;
        
        if (OPENAI_API_KEY) {
          // OpenAI integration
          response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
              model: 'gpt-3.5-turbo',
              messages: [
                { role: 'system', content: 'You are a helpful health and fitness assistant. Provide concise, practical advice about diet, exercise, and wellness.' },
                { role: 'user', content: message }
              ],
              max_tokens: 150
            },
            {
              headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
              }
            }
          );
          
          return res.json({ 
            response: response.data.choices[0].message.content.trim() 
          });
        } 
        
        if (OPENROUTER_API_KEY) {
          // OpenRouter integration
          response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
              model: 'openai/gpt-3.5-turbo',
              messages: [
                { role: 'system', content: 'You are a helpful health and fitness assistant. Provide concise, practical advice about diet, exercise, and wellness.' },
                { role: 'user', content: message }
              ],
              max_tokens: 150
            },
            {
              headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
              }
            }
          );
          
          return res.json({ 
            response: response.data.choices[0].message.content.trim() 
          });
        }
      } catch (aiError) {
        console.error('AI API Error:', aiError.message);
        // Fallback to rule-based responses if AI fails
      }
    }
    
    // Rule-based responses as fallback
    const response = getHealthResponse(message.toLowerCase());
    res.json({ response });
    
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat message', message: error.message });
  }
};

/**
 * Simple rule-based health responses as a fallback when no AI is available
 */
function getHealthResponse(message) {
  if (message.includes('breakfast') || message.includes('morning meal')) {
    return "For a healthy breakfast, try oatmeal with fruits and nuts, Greek yogurt with berries, or eggs with whole grain toast. These options provide protein and fiber to keep you full.";
  } else if (message.includes('lunch')) {
    return "Healthy lunch options include salads with lean protein, grain bowls, or soup with a side salad. Try to include vegetables, protein, and whole grains.";
  } else if (message.includes('dinner')) {
    return "For dinner, consider baked fish with roasted vegetables, stir-fry with tofu, or a lean protein with quinoa and steamed greens.";
  } else if (message.includes('snack')) {
    return "Healthy snacks include apple slices with almond butter, Greek yogurt, hummus with vegetables, or a small handful of nuts.";
  } else if (message.includes('weight loss') || message.includes('lose weight')) {
    return "Focus on eating whole foods, controlling portions, increasing protein intake, and staying consistent with regular exercise. Small sustainable changes work better than drastic diets.";
  } else if (message.includes('exercise') || message.includes('workout')) {
    return "A balanced fitness routine includes cardio, strength training, and flexibility work. Aim for 150 minutes of moderate exercise per week, with 2-3 days of strength training.";
  } else if (message.includes('water') || message.includes('hydration')) {
    return "Staying hydrated is crucial for health. Aim for about 8 cups (64 ounces) of water daily, more if you're active or in hot weather.";
  } else {
    return "For a healthy lifestyle, focus on balanced nutrition, regular exercise, adequate sleep, stress management, and staying hydrated. Is there a specific health topic you'd like advice on?";
  }
}
