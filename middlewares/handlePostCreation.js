const { cloudinaryUpload } = require("./cloudinary-upload");
const upload = require("./multer-upload");

function handlePostCreation(req, res, next) {
  if (req.file) {
      cloudinaryUpload(req, res, (error) => {
        if (error) {
          return res.status(400).json({ error: "Cloudinary upload failed" });
        }
        next();
      });
  } else {
    next();
  }
}

module.exports = handlePostCreation;
