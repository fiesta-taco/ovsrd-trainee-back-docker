"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
exports.default = {
    saveImageToS3(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield (0, sharp_1.default)(file.path)
                .resize(300, 150) // w h
                .toFormat('jpeg') // JPEG
                .jpeg({ quality: 80 }) // compress it with a quality level of 80 out of 100
                .toBuffer();
            const params = {
                Bucket: `${process.env.AWSBucket}`,
                Key: `${file.originalname}`,
                Body: image,
                ContentType: file.mimetype,
                ACL: 'public-read'
            };
            //const result = await s3.upload(params).promise();
            const imageURL = "result.Location";
            return imageURL;
        });
    }
};
