const Post = require("../controllers/post.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/post", authenticate, Post.new_post);
  app.get("/api/posts", authenticate, Post.all_posts);
  app.put("/api/posts/like", authenticate, Post.like_post);
  // app.put("/api/posts/dislike", authenticate, Post.dislike_post);
};
