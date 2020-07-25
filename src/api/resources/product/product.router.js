import express from 'express';
import productController from './product.controller';
import { uploadSingle } from '../../middleware/upload-single';

export const productRouter = express.Router();

productRouter.route('/')
    .post(uploadSingle.any(), productController.createProduct)
    .get(productController.getAllProduct);

productRouter.route('/:id')
    .delete(productController.deleteProduct)
    .get(productController.getOne)
    .put(uploadSingle.any(), productController.updateProduct)

productRouter.get('/updatestatus/:id', productController.updateStatus);
productRouter.get('/updatehome/:id', productController.updateHome);
