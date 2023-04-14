const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    text: {
      type: String,
      required: [true, "Your comment can not be empty"],
      maxLength: 100,
    },
    like: {
      users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    dislike: {
      users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    post: { type: Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
