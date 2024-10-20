import AWS from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config({path:`.env`})


AWS.config.update({
  region: process.env.AWSRegion,
});

const s3 = new AWS.S3();
export default s3;


export const putObjectParam = {
  Bucket: `${process.env.AWSBucket}`,
  Key: 'key',
  ContentType: 'imageeeeeeee/*',
  Expires: 120,
};

export const getObjectParam = {
  Bucket: `${process.env.AWSBucket}`,
  Key: 'key',
  Expires: 60*60,
};
