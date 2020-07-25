'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uploadSingle = undefined;

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer2.default.diskStorage({
    destination: './uploads',
    filename: function filename(req, file, cb) {
        var name = _path2.default.parse(file.originalname);
        cb(null, '' + name.name + Date.now().toString() + name.ext);
    }
});
var fileFilter = function fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb("Type file is not access", false);
    }
};
var uploadSingle = exports.uploadSingle = (0, _multer2.default)({
    storage: storage,
    fileFilter: fileFilter,
    limits: 1024 * 1024 * 5
});