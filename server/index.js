require('dotenv').config();
const express = require('express');
const cors = require('cors');
const models = require('./models/index');
const sequelize = require('./db.config');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandling.middleware');

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
// Handling any errors, it must be the last one
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(port, () =>
      console.log('\x1b[36m%s\x1b[0m', '[server] The server starts on http://localhost:' + port),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
