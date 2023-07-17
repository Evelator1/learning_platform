const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    console.log(req.params)
    const username = req.params;
    const user = await User.findOne(username);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const creatUser = async (req, res) => {
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
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePreferences = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = await User.findByIdAndUpdate(id, body.userWishWelcome, { new: true });
    console.log(req.body.userWishWelcome);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { creatUser, getUsers, getUserById, updateUser, updatePreferences };
