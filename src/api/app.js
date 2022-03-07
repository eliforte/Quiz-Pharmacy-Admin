require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const root = require('../controllers/root');
const error = require('../global/middlewares/error');

const { LOCALHOST1, LOCALHOST2 } = process.env;
const app = express();

const corsOptions = {
  origins: [ LOCALHOST1, LOCALHOST2 ],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(root);
app.use(error);

module.exports = app;
