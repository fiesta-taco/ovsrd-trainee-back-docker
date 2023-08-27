
import { Request, Response } from "express";
import imageService from "./image.service";



export default {

    async uploadImage(req: Request, res: Response) {
        try {
            const { fileKey } = req.body;
            if (!fileKey) {
                return res.status(400).send('No file key.');
            } else {
                const imageURL = await imageService.saveImageToS3(fileKey);
                res.json({ url: imageURL });
            }

        } catch (err) {
            console.error(err);
            return { err: err }
        }
    }
}