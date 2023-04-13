const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    text: {
      type: String,
      required: [true, "Your post can not be empty."],
      maxLength: 100,
    },
    like: {
      users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    dislike: {
      users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
