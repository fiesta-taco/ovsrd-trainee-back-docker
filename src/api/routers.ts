import express from "express";
import { imageRouter } from '../api/image/image.router';



export const router = express.Router();
router.use('/image',  imageRouter);