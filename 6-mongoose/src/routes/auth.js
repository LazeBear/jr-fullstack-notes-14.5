// const express = require('express');
const { Router } = require('express');
const { login } = require('../controllers/auth');

const authRouter = Router();

authRouter.post('', login);

module.exports = authRouter;
