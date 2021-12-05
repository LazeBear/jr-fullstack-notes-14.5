const express = require('express');
const authGuard = require('../middleware/authGuard');
const authRouter = require('./auth');
const courseRouter = require('./courses');
const studentRouter = require('./students');
const userRouter = require('./users');

const v1Router = express.Router();

v1Router.use('/courses', authGuard, courseRouter);
v1Router.use('/students', studentRouter);
v1Router.use('/users', userRouter);
v1Router.use('/auth', authRouter);
// /login
// /register

module.exports = v1Router;
