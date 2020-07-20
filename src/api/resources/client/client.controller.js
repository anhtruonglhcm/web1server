import { BAD_REQUEST, OK, NOT_FOUND } from 'http-status-codes';
import Client from './client.model';
import clientService from './client.service';

export default {
  async createClient(req, res) {
    const { error, value } = await clientService.validateCreateSchema(req.body);
    if (error && error.details) {
      return res.status(BAD_REQUEST).json(error);
    }
    const client = await Client.create(value);
    return res.status(OK).json(client);
  },
  async findAll(req, res) {
    const client = await Client.find();
    if (client) {
      return res.status(OK).json(client);
    }
    return res.status(NOT_FOUND).json({ msg: 'could not found any client' });
  },
  async findOne(req, res) {
    const client = await Client.findById(req.params.id);
    if (client) {
      return res.status(OK).json(client);
    }
    return res.status(NOT_FOUND).json({ msg: 'could not found any client' });
  },
  async deleteClient(req, res) {
    const client = await Client.findOneAndDelete({ _id: req.params.id });
    if (!client) {
      return res.status(NOT_FOUND).json({ msg: 'could not found any client' });
    }
    return res.status(OK).json(client);
  },
  async updateClient(req, res) {
    const { error, value } = await clientService.validateUpdateSchema(req.body);
    if (error) {
      return res.status(BAD_REQUEST).json(error);
    }
    const client = Client.findByIdAndUpdate(req.params.id, value, { new: true });
    if (client) {
      return res.status(OK).json(client);
    }
    return res.status(NOT_FOUND).json({ msg: 'could not found any client' });
  },
};
