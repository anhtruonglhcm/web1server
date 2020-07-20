import { NOT_FOUND, OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } from 'http-status-codes';
import faker from 'faker';
import invoiceService from './invoice.service';
import Invoice from './invoice.model';

export default {
  async findAll(req, res) {
    try {
      const { page = 1, perPage = 10, filter, sortField, sortDir } = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(perPage, 10),
        populate: 'Client',
      };
      const query = {};
      if (filter) {
        query.item = {
          $regex: filter,
          $options: 'i',
        };
      }
      if (sortField && sortDir) {
        options.sort = {
          [sortField]: sortDir,
        };
      }
      const invoice = await Invoice.paginate(query, options);
      if (invoice) {
        return res.status(OK).json(invoice);
      }
      return res.status(NOT_FOUND).json({ msg: 'could not find any invoice' });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async createInvoice(req, res) {
    try {
      const { error, value } = invoiceService.validateCreateInvoice(req.body);
      if (error) {
        res.status(BAD_REQUEST).json(error);
      }
      const invoice = await Invoice.create(value);
      if (invoice) {
        return res.status(OK).json(invoice);
      }
      return res.status(BAD_REQUEST).json({ msg: 'could not create any invoice' });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async findOne(req, res) {
    try {
      const invoice = await Invoice.findById(req.params.id);
      if (invoice) {
        return res.status(OK).json(invoice);
      }
      return res.status(NOT_FOUND).json({ msg: 'could not find any invoice' });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async deleteInvoice(req, res) {
    try {
      const invoice = await Invoice.findByIdAndDelete(req.params.id);
      if (invoice) {
        return res.status(OK).json(invoice);
      }
      return res.status(NOT_FOUND).json({ msg: 'could not find any invoice' });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async updateInvoice(req, res) {
    try {
      const { error, value } = invoiceService.validateUpdateInvoice(req.body);
      if (error) {
        return res.status(BAD_REQUEST).json(error);
      }
      const invoice = await Invoice.findByIdAndUpdate(req.params.id, value, { new: true });
      if (invoice) {
        return res.status(OK).json(invoice);
      }
      return res.status(BAD_REQUEST).json({ msg: 'could not find any invoice' });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },
  async fakedate(req, res, next) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 96; i++) {
      const invoice = new Invoice();
      invoice.item = faker.commerce.productName();
      invoice.price = faker.commerce.price();
      invoice.qty = faker.random.number();
      invoice.date = faker.date.future();
      // eslint-disable-next-line consistent-return
      invoice.save((err) => {
        if (err) {
          return next(err);
        }
      });
    }
    res.redirect('/');
  },
};
