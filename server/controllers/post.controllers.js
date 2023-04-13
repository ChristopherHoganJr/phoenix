const Post = require("../models/post.models");
const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

module.exports = {
  new_post: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.create({ author: user._id, text: req.body.text });
        return res.status(200).json({ message: "post saved!" });
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
};
