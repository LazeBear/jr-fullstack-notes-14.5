// const express = require('express');
const { Router } = require('express');
const { register } = require('../controllers/users');

const userRouter = Router();

userRouter.post('', register);

module.exports = userRouter;
