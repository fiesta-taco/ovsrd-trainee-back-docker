
import { Request, Response } from "express";
import imageService from "./image.service";



export default {

    async uploadImage (req: Request, res: Response){
        try {
            
            if(!req.file){   
                return res.status(400).send('No file uploaded.');
            }else{
                const imageURL = await imageService.saveImageToS3(req.file);
                res.header('Access-Control-Allow-Origin', '*');
                res.json({url:imageURL});
            }
            
        } catch (err) {
            console.error(err);
        }
    }
}