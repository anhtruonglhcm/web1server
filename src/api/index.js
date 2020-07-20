import express from 'express';
import { invoiceRouter } from './resources/invoice';
import { clientRouter } from './resources/client';
import { userRouter } from './resources/user';

export const restRouter = express.Router();
restRouter.use('/invoice', invoiceRouter);
restRouter.use('/client', clientRouter);
restRouter.use('/user', userRouter);

// passport.authenticate('jwt', { session: false })
