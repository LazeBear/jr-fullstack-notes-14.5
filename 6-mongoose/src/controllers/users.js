const User = require('../models/user');
const { generateToken } = require('../utils/jwt');

async function register(req, res) {
  const { username, password } = req.body;

  // check for existing user

  const user = new User({ username, password });
  await user.hashPassword();
  await user.save();

  const token = generateToken({ id: user._id, username });
  return res.json({ username, token });
}

module.exports = {
  register,
};
