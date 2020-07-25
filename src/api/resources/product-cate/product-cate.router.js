import express from 'express';
import productCateController from './product-cate.controller'
import { uploadSingle } from '../../middleware/upload-single';

export const productCateRouter = express.Router();
productCateRouter.route('/')
    .post(uploadSingle.any(), productCateController.createProductCate)
    .get(productCateController.findAll);

productCateRouter.get('/updatestatus/:id', productCateController.updateStatus)
productCateRouter.route('/:id')
    .delete(productCateController.deleteProductCate)
    .get(productCateController.findOne)
    .put(uploadSingle.any(), productCateController.updateProCate)