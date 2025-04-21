const { setReminderInStore, getAllReminders } = require('../data/store');

/**
 * Sets a reminder in the in-memory store
 */
exports.setReminder = (req, res) => {
  try {
    const { type, time } = req.body;
    
    // Validate required fields
    if (!type || !time) {
      return res.status(400).json({ 
        error: 'Missing required information',
        message: 'Reminder type and time are required'
      });
    }
    
    // Validate time format
    if (!isValidTimeFormat(time)) {
      return res.status(400).json({
        error: 'Invalid time format',
        message: 'Time should be in a valid format (e.g., "8:00 AM", "14:30")'
      });
    }
    
    // Create a unique ID for the reminder
    const id = Date.now().toString();
    
    // Store the reminder
    const reminder = { id, type, time, createdAt: new Date().toISOString() };
    setReminderInStore(reminder);
    
    res.json({
      status: 'Reminder set successfully',
      reminder
    });
    
  } catch (error) {
    console.error('Reminder setting error:', error);
    res.status(500).json({ error: 'Failed to set reminder', message: error.message });
  }
};

/**
 * Validates time format
 * Accepts 12-hour format (e.g., "8:00 AM") and 24-hour format (e.g., "14:30")
 */
function isValidTimeFormat(time) {
  // 12-hour format with AM/PM
  const twelveHourRegex = /^(1[0-2]|0?[1-9]):([0-5][0-9])(\s?[AP]M)$/i;
  
  // 24-hour format
  const twentyFourHourRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
  
  return twelveHourRegex.test(time) || twentyFourHourRegex.test(time);
}
