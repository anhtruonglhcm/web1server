import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import { configureJWTStragety } from './api/middleware/passport-jwt';
import { restRouter } from './api/index';
import { uploadSingle } from './api/middleware/upload-single';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('uploads'))
app.use(morgan('dev'));
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
app.use(passport.initialize());
configureJWTStragety();
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost/invoice',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
  (err) => {
    if (err) {
      console.log('connect failed');
    } else {
      console.log('connect success');
    }
  },
);
app.post('/upload', uploadSingle.any(), (req, res) => {
  url = `http://35.225.51.29:3000/${req.files[0].firstName}`
  return res.json({ urls: url })
})
app.use('/api', restRouter);
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  err.message = 'Invalid route';
  next(err);
});
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status = err.status || 500;
  return res.json({
    err: {
      msg: err.message,
    },
  });
});
app.listen(PORT, () => {
  console.log(`serve is listenning on port ${PORT}`);
});
