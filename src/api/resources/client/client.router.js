import express from 'express';
import clientController from './client.controller';

export const clientRouter = express.Router();
clientRouter.route('/').post(clientController.createClient).get(clientController.findAll);
clientRouter
  .route('/:id')
  .get(clientController.findOne)
  .delete(clientController.deleteClient)
  .put(clientController.updateClient);
