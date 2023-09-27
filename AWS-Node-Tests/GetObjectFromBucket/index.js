const aws = require("aws-sdk");

getObjectFromBucket();

async function getObjectFromBucket() {
  const downloadParams = {
    Bucket: "bt4-dev-project-assets-alderaan",
    Key: "projectassets/459/11f72265-b88d-49f4-94f3-ed18aa3aa3ae/1c47cb08-70d9-c115-5920-1f261cbcd34b.pptx",
  };

  const s3 = new aws.S3({ region: "us-east-1" });
  try {
    const data = await s3.getObject(downloadParams).promise();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  // const fileSizeInBytes = 852250;
  // const timestamp = new Date().getTime();
  // const inputFileName = decodeURIComponent(
  //   downloadParams.Key.replace(/(\+)/g, " ")
  // );
  // const filePath_ = inputFileName.substring(0, inputFileName.lastIndexOf("/"));
  // const fileName_ = inputFileName.substring(inputFileName.lastIndexOf("/") + 1);
  // const type = inputFileName.substring(inputFileName.lastIndexOf(".") + 1);
  // const outputFileName = decodeURIComponent(
  //   filePath_ + "/." + fileName_.replace(/(\+)/g, " ") + ".pdf"
  // );

  // // Convert the file size to megabytes (optional)
  // var fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
  // filesizeBiggerThan1gb = fileSizeInMegabytes > 1024 ? true : false;

  // console.log("inputFileName:", inputFileName);
  // console.log("filePath_:", filePath_);
  // console.log("fileName_:", fileName_);
  // console.log("type:", type);
  // console.log("outputFileName:", outputFileName);
  // console.log("fileSizeInMegabytes:", fileSizeInMegabytes);
  // console.log("filesizeBiggerThan1gb:", filesizeBiggerThan1gb);
}
