const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const cloudinaryUpload = async (req, res, next) => {
  try {
    const { file } = req;
    const result = await cloudinary.v2.uploader.unsigned_upload(
      file.path,
      "odgsuzdgvzszogzuovszdddfzgsuvodv" // unsigned upload parameter
    );

    console.log(result, "is the result");

    result.localPath = file.path;
    req.file = result;

    next();
  } catch (err) {
    console.log(err)
    res.status(500).send("upload failed", err);
  }
};

module.exports = { cloudinaryUpload };
