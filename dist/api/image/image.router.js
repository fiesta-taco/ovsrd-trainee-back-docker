"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRouter = void 0;
const express_1 = __importDefault(require("express"));
const image_controller_1 = __importDefault(require("./image.controller"));
const multer_1 = __importDefault(require("multer"));
exports.imageRouter = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: 'tmp/' });
exports.imageRouter.route('/upload').post(upload.single('image'), image_controller_1.default.uploadImage);
