import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: process.env.AWSRegion,
});

const s3 = new AWS.S3();
export default s3;