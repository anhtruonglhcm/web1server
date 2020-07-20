import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import faker from 'faker';
import { configureJWTStragety } from './api/middleware/passport-jwt';
import { restRouter } from './api/index';
import Invoice from './api/resources/invoice/invoice.model';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
configureJWTStragety();
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost/invoice',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log('connect failed');
    } else {
      console.log('connect success');
    }
  },
);
app.get('/fakedata', async (req, res, next) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 96; i++) {
    const invoice = new Invoice();
    invoice.item = faker.commerce.productName();
    invoice.price = faker.commerce.price();
    invoice.qty = faker.random.number();
    invoice.date = faker.date.future();
    invoice.client = '5f089c76df68ae1f5c35ac0c';
    // eslint-disable-next-line consistent-return
    invoice.save((err) => {
      if (err) {
        return next(err);
      }
    });
  }
  res.send('success');
});
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
