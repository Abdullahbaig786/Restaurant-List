// controllers/auth.controller.js

const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signup = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Provide both username and password" });
  }

  try {
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await User.create({ username, password: hashedPassword });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Provide both username and password" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.session.currentUser = user;
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    next(error);
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: "Logout successful" });
};
