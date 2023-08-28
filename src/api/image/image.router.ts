import express from "express";
import imageController from "./image.controller";
export const imageRouter = express.Router();

imageRouter.route('/upload').post(imageController.uploadImage);