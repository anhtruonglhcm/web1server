import express from 'express';
import { invoiceRouter } from './resources/invoice';
import { clientRouter } from './resources/client';
import { userRouter } from './resources/user';
import { productCateRouter } from './resources/product-cate';
import { productRouter } from './resources/product'

export const restRouter = express.Router();
restRouter.use('/invoice', invoiceRouter);
restRouter.use('/client', clientRouter);
restRouter.use('/user', userRouter);
restRouter.use('/product-cate', productCateRouter)
restRouter.use('/product', productRouter)

// passport.authenticate('jwt', { session: false })
