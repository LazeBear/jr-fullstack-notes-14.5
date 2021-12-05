// firstName, lastName, email
const { Schema, model } = require('mongoose');
const Joi = require('joi');

// joi, express-validator, validator.js

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email) => {
        // const validation = Joi.string().email().validate(email);
        // const { error } = validation;
        // if (error) {
        //   return false;
        // }
        // return true;
        // regex
        // 如果返回false，代表验证失败
        return !Joi.string().email().validate(email).error;
      },
      msg: 'Invalid email format',
    },
  },
  courses: [
    {
      type: String,
      // type: 'string',
      ref: 'Course',
    },
  ],
  // course: {
  //   type: String,
  //   // type: 'string',
  //   ref: 'Course',
  // },
});

const Model = model('Student', schema);

module.exports = Model;
