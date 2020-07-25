import productCateService from './product-cate.service';
import { BAD_REQUEST, OK, INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes';
import ProductCate from './product-cate.model';
import fs from 'fs';

export default {
    async createProductCate(req, res) {
        try {
            const { error, value } = productCateService.validateCreateProductCate(req.body);
            if (error) {
                return res.status(BAD_REQUEST).json(error)
            }
            const { name, description, status, position } = value;
            const productCate = new ProductCate();
            productCate.name = name;
            productCate.description = description;
            productCate.status = status ? status : false;
            productCate.position = position ? position : 0;
            productCate.photo = req.files.length > 0 ? req.files[0].filename : '';
            console.log(productCate);
            await productCate.save()
            return res.status(OK).json(productCate);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }

    },

    async findAll(req, res) {
        try {
            const productCate = await ProductCate.find();
            if (productCate) {
                return res.status(OK).json(productCate)
            }
            return res.status(BAD_REQUEST).json({ msg: 'not found any ProductCate' })
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async deleteProductCate(req, res) {
        try {
            const { id } = req.params;
            const productCate = await ProductCate.findByIdAndDelete(id);
            if (!productCate) {
                return res.status(NOT_FOUND).json({ msg: 'can not found any productCate' })
            }
            if (productCate.photo) {
                const link = `uploads/${productCate.photo}`;
                if (fs.existsSync(link)) {
                    fs.unlinkSync(link);
                }
            }
            return res.status(OK).json(productCate);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }

    },

    async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const productCate = await ProductCate.findById(id);
            if (!productCate) {
                return res.status(NOT_FOUND).json({ msg: 'can not found any Product Category' })
            }
            productCate.status = !productCate.status;
            await productCate.save();
            return res.status(OK).json(productCate);
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }

    },

    async findOne(req, res) {
        try {
            const productCate = await ProductCate.findById(req.params.id);
            if (!productCate) {
                return res.status(NOT_FOUND).json({ msg: 'can not found any Product Category' })
            }
            return res.status(OK).json(productCate)
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async updateProCate(req, res) {
        try {
            const productCate = await ProductCate.findById(req.params.id);
            if (!productCate) {
                return res.status(NOT_FOUND).json({ msg: 'can not found any Product Category' })
            }
            const { error, value } = productCateService.validateUpdateProductCate(req.body);
            if (error) {
                return res.status(BAD_REQUEST).json(error)
            }
            if (req.files.length > 0) {
                value.photo = req.files[0].filename;
                let link = `uploads/${productCate.photo}`;
                if (fs.existsSync(link)) {
                    fs.existsSync(link)
                }
            }
            console.log(value);
            const proCate = await ProductCate.findByIdAndUpdate(req.params.id, value, { new: true })
            if (proCate) {
                return res.status(OK).json(proCate)
            }
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }

    }
}