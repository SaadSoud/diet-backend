/**
 * In-memory data store for the application
 * Stores reminders, chat history, and other data
 */

// In-memory store
const store = {
  reminders: [],
  chatHistory: [],
  userDietPlans: []
};

/**
 * Sets a reminder in the store
 * @param {Object} reminder - The reminder object to store
 */
exports.setReminderInStore = (reminder) => {
  store.reminders.push(reminder);
  console.log(`Reminder set: ${reminder.type} at ${reminder.time}`);
  return reminder;
};

/**
 * Gets all reminders from the store
 * @returns {Array} Array of reminder objects
 */
exports.getAllReminders = () => {
  return [...store.reminders];
};

/**
 * Adds a chat message to history
 * @param {Object} chat - The chat object with user message and response
 */
exports.addChatToHistory = (chat) => {
  store.chatHistory.push({
    ...chat,
    timestamp: new Date().toISOString()
  });
};

/**
 * Gets chat history
 * @param {number} limit - Optional limit of messages to return
 * @returns {Array} Array of chat message objects
 */
exports.getChatHistory = (limit) => {
  if (limit && typeof limit === 'number') {
    return store.chatHistory.slice(-limit);
  }
  return [...store.chatHistory];
};

/**
 * Saves a user diet plan
 * @param {Object} plan - The diet plan object
 */
exports.saveDietPlan = (plan) => {
  store.userDietPlans.push({
    ...plan,
    createdAt: new Date().toISOString()
  });
};

/**
 * Gets all diet plans
 * @returns {Array} Array of diet plan objects
 */
exports.getAllDietPlans = () => {
  return [...store.userDietPlans];
};

/**
 * Clears all data in the store (for testing purposes)
 */
exports.clearAllData = () => {
  store.reminders = [];
  store.chatHistory = [];
  store.userDietPlans = [];
  console.log('All in-memory data cleared');
};
