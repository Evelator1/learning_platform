const { cloudinaryUpload } = require("../middlewares/cloudinary-upload");
const upload = require("../middlewares/multer-upload");

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
