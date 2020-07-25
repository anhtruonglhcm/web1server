import Product from './product.model';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK, NOT_FOUND } from 'http-status-codes'
import productServices from './product.service';
import slugify from 'slugify';
import fs from 'fs';

export default {
    async getAllProduct(req, res) {
        try {
            const { page = 1, perPage = 10, filter, sortField, sortDir } = req.query;
            console.log(page);
            console.log(perPage);
            const options = {
                page: parseInt(page, 10),
                limit: parseInt(perPage, 10),
                populate: 'ProductCate'
            }
            const query = {};
            if (filter) {
                query.name = {
                    $regex: filter,
                    $options: 'i'
                }
            }
            if (sortField && sortDir) {
                options.sort = {
                    [sortField]: sortDir
                }
            }
            const product = await Product.paginate(query, options);
            if (!product) {
                return res.status(BAD_REQUEST).json({ msg: ' can not found any product' })
            }
            return res.status(OK).json(product);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async createProduct(req, res) {
        try {
            let { error, value } = await productServices.validateCreateProduct(req.body);
            if (error) {
                return res.status(BAD_REQUEST).json(error)
            }
            if (req.files.length > 0) {
                value.photo = req.files[0].filename;
            }
            value.slug = await slugify(value.name, { locale: 'vi' });
            console.log(value);
            const product = await Product.create(value);
            return res.status(OK).json(product);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }

    },
    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            let { error, value } = await productServices.validateUpdateProduct(req.body);
            console.log(value);
            if (error) {
                return res.status(BAD_REQUEST).json(error)
            }
            const pr = await Product.findById(id);
            if (!pr) {
                return res.status(NOT_FOUND).json({ msg: 'can not found any product' });
            }
            if (req.files.length > 0) {
                value.photo = req.files[0].filename;
                const link = `uploads/${pr.photo}`;
                if (fs.existsSync(link)) {
                    fs.unlinkSync(link);
                }
            } else {
                value.photo = pr.photo;
            }
            const product = await Product.findByIdAndUpdate(id, value, { new: true });
            if (!product) {
                return res.status(BAD_REQUEST).json({ msg: 'sao the nay' })
            }
            return res.status(OK).json(product);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndDelete(id);
            if (!product) {
                return res.status(BAD_REQUEST).json({ msg: 'can not found any product' })
            }
            if (product.photo) {
                const link = `uploads/${product.photo}`;
                if (fs.existsSync(link)) {
                    fs.unlinkSync(link);
                }
            }
            return res.status(OK).json(product);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }


    },

    async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            product.status = !product.status;
            product.save();
            if (!product) {
                return res.status(BAD_REQUEST).json({ msg: 'can not found any product' })
            }
            return res.status(OK).json(product);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async updateHome(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            product.is_home = !product.is_home;
            product.save();
            if (!product) {
                return res.status(BAD_REQUEST).json({ msg: 'can not found any product' })
            }
            return res.status(OK).json(product);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            if (!product) {
                return res.status(BAD_REQUEST).json({ msg: 'can not found any product' })
            }
            return res.status(OK).json(product)
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }

    }
}