const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routes/postRoutes');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log('Middleware Working 🚨');
  next();
});
app.use(morgan('dev'));

app.use('/api/v1/posts', postRouter);

app.use((req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong',
    data: null,
  });
});
module.exports = app;
