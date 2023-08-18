import s3 from '../../config/aws.config';
import sharp from 'sharp'
import dotenv from 'dotenv'
dotenv.config({path:`.env`})


export default{

    async saveImageToS3( file:Express.Multer.File){
        const image = await sharp(file.path)
                .resize(300, 150) // w h
                .toFormat('jpeg') // JPEG
                .jpeg({ quality: 80 })// compress it with a quality level of 80 out of 100
                .toBuffer() 
                
                const params = {
                    Bucket: `${process.env.AWSBucket}`,
                    Key: `${file.originalname}`,
                    Body: image,
                    ContentType: file.mimetype,
                    ACL: 'public-read'
                  };
                const result = await s3.upload(params).promise();
               const imageURL = result.Location;
               return imageURL;
    }   

}