require('dotenv').config();
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const validationErrorHandler = require('./middleware/validationErrorHandler');
const v1Router = require('./routes');
const connectToDB = require('./utils/db');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/v1', v1Router);
app.use(validationErrorHandler);
app.use(errorHandler);

module.exports = app;
