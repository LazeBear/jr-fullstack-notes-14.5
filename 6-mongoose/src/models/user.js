const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};

schema.methods.validatePassword = async function (password) {
  // abc123, $2b$12xxxxxxxxxxxxx
  return bcrypt.compare(password, this.password);
};

const Model = model('User', schema);

module.exports = Model;

/**
 * 加密，解密 (可逆)
 * encrypt, decrypt
 *
 * 哈希 -> hash (不可逆)
 *
 *
 * 加盐
 * salt
 */
