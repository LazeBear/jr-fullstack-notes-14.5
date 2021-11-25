require('dotenv').config();
const express = require('express');
// const cors = require('./middleware/cors');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes');
const logger = require('./utils/logger');
const swaggerJsDoc = require('./utils/swagger');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === 'dev' ? 'dev' : 'combined'));
// app.use(cors);
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

// GET /tasks/:id
app.use(router);

logger.debug('debug info');

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
