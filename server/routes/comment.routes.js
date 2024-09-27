const Comment = require("../controllers/comment.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/comment/:post_id", authenticate, Comment.new_comment);
  app.get("/api/comment/:post_id", authenticate, Comment.get_comments);
  app.put("/api/comment/like/:comment_id", authenticate, Comment.like_comment);
  app.put(
    "/api/comment/unlike/:comment_id",
    authenticate,
    Comment.unlike_comment
  );
  app.put(
    "/api/comment/dislike/:comment_id",
    authenticate,
    Comment.dislike_comment
  );
  app.put(
    "/api/comment/undislike/:comment_id",
    authenticate,
    Comment.undislike_comment
  );
  app.delete("/api/comment/:comment_id", authenticate, Comment.delete_comment);
};
