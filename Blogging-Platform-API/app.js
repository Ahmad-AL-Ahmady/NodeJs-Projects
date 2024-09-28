const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routes/postRoutes');
const AppError = require('./utils/AppError');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log('Middleware Working 🚨');
  next();
});
app.use(morgan('dev'));

app.use('/api/v1/posts', postRouter);

app.all('*', (req, res, next) => {
  next(new AppError('Route not found', 404));
});

app.use((err, req, res, next) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    data: null,
  });
});

module.exports = app;
