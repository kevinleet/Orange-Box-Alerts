const { APIKEY } = require("../config");

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"]; // Assuming API key is sent in the 'x-api-key' header

  // Check if API key is provided
  if (!apiKey) {
    return res.status(401).json({ message: "API key is required" });
  }

  // Check if API key is valid (you may check against a database or configuration)
  if (apiKey !== process.env.APIKEY) {
    return res.status(401).json({ message: "Invalid API key" });
  }

  // API key is valid, proceed to the next middleware or route handler
  next();
};

module.exports = validateApiKey;
