require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const routerUser = require('./routes/users');
const routerCard = require('./routes/cards');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const { corsOptions } = require('./utils/constants');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const celebrates = require('./middlewares/celebrates');
const NotFoundError = require('./errors/NotFoundError');

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useUnifiedTopology: true,
});

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signup', celebrates.validateUserData, createUser);
app.post('/signin', celebrates.validateUserData, login);
app.use(auth);
app.use('/users', routerUser);
app.use('/cards', routerCard);
app.use((req, res, next) => next(new NotFoundError('Запрашиваемый ресурс не найден')));
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(3000);
