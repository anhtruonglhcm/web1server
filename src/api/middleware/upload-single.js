import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        const name = path.parse(file.originalname);
        cb(null, `${name.name}${Date.now().toString()}${name.ext}`)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb("Type file is not access", false)
    }
}
export const uploadSingle = multer({
    storage,
    fileFilter,
    limits: 1024 * 1024 * 5
})