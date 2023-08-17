import express from "express";
import imageController from "./image.controller";
import multer from "multer";
export const imageRouter = express.Router();
const upload = multer({ dest: 'tmp/' });

imageRouter.route('/upload').post(upload.single('image'),imageController.uploadImage);