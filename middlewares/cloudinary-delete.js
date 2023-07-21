const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const cloudinaryDelete = async (req, res, next) => {
  const secureUrl = req.body.replaceDefault.profilePicture;
  console.log("secure-url: ", req.body.profilePicture);
  try {
    const public_id = secureUrl.split("/").pop().split(".")[0];
    console.log(public_id, "is the public id of the picture");

    if (!secureUrl) {
      throw new Error("Url not found in the request object");
    }
    if (!public_id) {
      throw new Error("Public ID not found in the file object");
    }

    const result = await cloudinary.v2.uploader.destroy(public_id, {});

    console.log(result);

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong with the Cloudinary-Delete");
  }
};

module.exports = { cloudinaryDelete };
