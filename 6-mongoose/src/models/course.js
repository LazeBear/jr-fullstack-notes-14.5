const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  // ObjectId
  _id: {
    // type: mongoose.Types.ObjectId,
    type: String,
    uppercase: true,
    // aka
    alias: 'code',
  },
  name: {
    type: String,
    required: true, // validation
  },
  description: {
    default: '',
    type: String,
  },
});

// courses
const Model = mongoose.model('Course', schema);

module.exports = Model;
