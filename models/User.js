// const { Binary } = require("bson");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, default:"" },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  profilePicture: { type: String, default:""},
  userWishWelcome: { type: Boolean, default: true},
  role: { type: String, enum: ["user", "admin"], default: "user" },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
