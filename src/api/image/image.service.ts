import s3 from '../../config/aws.config';
import dotenv from 'dotenv'
dotenv.config({ path: `.env` })


export default {

  async saveImageToS3(fileKey: string) {
    const param = {
      Bucket: `${process.env.AWSBucket}`,
      Key: `${fileKey}`,
      ContentType: 'image/*',
      Expires: 60 * 60,
    };
    try {
      const url = await s3.getSignedUrl('putObject', param);
      return url;
    } catch (error) {
      console.error('Error:', error);
      throw error; 
    }
  }

}