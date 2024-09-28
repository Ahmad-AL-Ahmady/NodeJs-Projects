const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routes/postRoutes');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log('Middleware is Working 🚨');
  next();
});

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1/posts', postRouter);

app.all('*', (req, res, next) => {
  next(new AppError('Route not found', 404));
});

app.use(globalErrorHandler);

module.exports = app;
