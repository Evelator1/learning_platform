const express = require("express");
const {
  createUser,
  getUsers,
  getUserByUsername,
  updateUser,
  updatePreferences,
  updateProfilePic,
  removeProfilePic,
} = require("../controllers/users");
const { verifyToken } = require("../middlewares/verifyToken");
const { isAccountOwner } = require("../middlewares/isAccountOwner");
const {cloudinaryUpload} = require("../middlewares/cloudinary-upload");
const {cloudinaryDelete} = require("../middlewares/cloudinary-delete");
const upload = require("../middlewares/multer-upload");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:username", verifyToken, isAccountOwner, getUserByUsername);
userRouter.put("/:id", updateUser);
userRouter.put("/:id/wishWelcome", updatePreferences);

userRouter.patch("/:id/update-profile-pic", upload.single("profilePicture"), cloudinaryUpload, updateProfilePic);
userRouter.patch("/:id/remove-profile-pic", cloudinaryDelete, removeProfilePic);

userRouter.post("/", createUser);

module.exports = userRouter;
