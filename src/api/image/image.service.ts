import s3, { putObjectParam } from '../../config/aws.config';



export default {

  async saveImageToS3(fileKey: string) {
    try {
      putObjectParam.Key = fileKey;
      const url = await s3.getSignedUrlPromise('putObject', putObjectParam);
      return url;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

}
