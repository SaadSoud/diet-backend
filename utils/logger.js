/**
 * Simple logger utility to log requests and other app events
 */

/**
 * Logs HTTP request details
 */
exports.logRequest = (req) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl || req.url;
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`[${timestamp}] ${method} ${url} from ${ip}`);
  
  // Log request body for POST requests (if not empty)
  if (method === 'POST' && req.body && Object.keys(req.body).length > 0) {
    console.log('Request Body:', JSON.stringify(req.body, null, 2));
  }
};

/**
 * Logs general application messages
 */
exports.logInfo = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] INFO: ${message}`);
};

/**
 * Logs error messages
 */
exports.logError = (message, error) => {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] ERROR: ${message}`, error);
};
