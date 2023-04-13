const Post = require("../controllers/post.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/post", authenticate, Post.new_post);
};
