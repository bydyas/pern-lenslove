require('dotenv').config();
const express = require('express');
const models = require('./models/index');
const sequelize = require('./db.config');
const port = process.env.PORT;

const app = express();

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
