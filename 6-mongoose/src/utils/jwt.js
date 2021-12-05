const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

// refresh token
// access token
function generateToken(payload) {
  return jwt.sign(payload, JWT_KEY, { expiresIn: '1s' });
}

function validateToken(token) {
  // return jwt.verify(token, JWT_KEY); // throw Error
  try {
    return jwt.verify(token, JWT_KEY);
  } catch (e) {
    return null;
  }
}

module.exports = { generateToken, validateToken };
