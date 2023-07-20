const User = require("../models/user");
const fs = require("fs")

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserByUsername = async (req, res) => {
  try {
    console.log(req.params)
    const username = req.params;
    const user = await User.findOne(username);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const {
      body: { username, email, password,userWishWelcome, profilePicture },
    } = req;
    const user = await User.create({
      username,
      email,
      password,
      userWishWelcome,
      profilePicture,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    console.log(req.body);
    res.status(202).json(user);
  } catch (error) {
    res.status(406).send(error.message);
  }
};

const updatePreferences = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = await User.findByIdAndUpdate(id, body.userWishWelcome, { new: true });

    console.log(req.body.userWishWelcome);
    res.status(202).json(user);
  } catch (error) {
    res.status(406).send(error.message);
  }
};

const updateProfilePic = async (req, res) => {
  try {
    const id = req.params.id;
    const profilePicture = req.file.secure_url;
    const user = await User.findByIdAndUpdate(id, {profilePicture}, { new: true });
   // console.log(profilePicture,"is the request.body");
    
   fs.unlinkSync(req.file.localPath)
    res.status(202).json(user);
  } catch (error) {
    res.status(406).send(error.message);
  }
};

module.exports = { createUser, getUsers, getUserByUsername, updateUser, updatePreferences, updateProfilePic };
