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
  address: {
    street1: String,
    street2: String,
    state: String,
    postcode: Number,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
});

// courses
const Model = mongoose.model('Course', schema);

module.exports = Model;
