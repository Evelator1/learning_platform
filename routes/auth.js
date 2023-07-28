const express = require("express");
const {
  signup,
  login,
  logout,
  getProfile,
  editPassword,
  editEmail,
} = require("../controllers/userLogin");
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");
const { authorizeEdits } = require("../middlewares/authorizeEdits");
const { isAccountOwner } = require("../middlewares/isAccountOwner");

const authRouter = express.Router();
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.patch("/edit-email/:id", verifyToken, editEmail);
authRouter.patch("/edit-password/:id", verifyToken, editPassword);
authRouter.post("/logout", logout);
authRouter.get("/profile", verifyToken, authorize("user"), getProfile);

module.exports = authRouter;
