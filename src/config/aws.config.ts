import AWS from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config({path:`.env`})


AWS.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: process.env.AWSRegion,
});

const s3 = new AWS.S3();
export default s3;


export const putObjectParam = {
  Bucket: `${process.env.AWSBucket}`,
  Key: 'key',
  ContentType: 'image/*',
  Expires: 120,
};
