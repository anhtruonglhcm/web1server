import express from 'express';
import invoiceController from './invoice.controller';

export const invoiceRouter = express.Router();
invoiceRouter.route('/').get(invoiceController.findAll).post(invoiceController.createInvoice);
invoiceRouter
  .route('/:id')
  .delete(invoiceController.deleteInvoice)
  .put(invoiceController.updateInvoice)
  .get(invoiceController.findOne);
invoiceRouter.route('/fakedata').get(invoiceController.fakedate);
