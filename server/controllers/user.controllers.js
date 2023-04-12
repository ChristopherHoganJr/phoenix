const User = require("../models/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    const exist = await User.findOne({ email: req.body.email });
    if (exist) {
      res
        .status(400)
        .json({ error: "email already exists. please login instead." });
    } else {
      User.create(req.body).then((user) => {
        const usertoken = jwt.sign(
          {
            id: user._id,
          },
          process.env.SECRET_KEY
        );

        res
          .cookie("usertoken", usertoken, process.env.SECRET_KEY, {
            httpOnly: true,
          })
          .json({
            message: "successfully created user",
            currentUser: { username: user.username, email: user.email },
          });
      });
    }
  },
  login: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(400).json({ error: "account does not exist" });
    }
    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!correctPassword) {
      return res.status(400).json({ error: "invalid email or password" });
    }

    const usertoken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY
    );

    res
      .cookie("usertoken", usertoken, process.env.SECRET_KEY, {
        httpOnly: true,
      })
      .json({ name: user.name, email: user.email });
  },
  account: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) =>
        res.status(200).json({ username: user.username, email: user.email })
      )
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  logout: (req, res) => {
    res.clearCookie("usertoken").sendStatus(200);
  },
};
