const Comment = require("../models/comment.model");
const Post = require("../models/post.models");
const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

module.exports = {
  new_comment: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.findById(req.params.post_id)
          .then((foundPost) =>
            Comment.create({
              author: user._id,
              text: req.body.text,
              post: foundPost._id,
            })
              .then((comment) => res.status(200).json(comment))
              .catch((error) =>
                res.status(400).json({ errors: "errors creating comment" })
              )
          )
          .catch((error) =>
            res.status(400).json({ errors: "could not find post" })
          );
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  get_comments: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.findById(req.params.post_id)
          .then((post) =>
            Comment.find({
              post: post._id,
            })
              .populate("author")
              .then((comments) => res.status(200).json(comments))
              .catch((error) =>
                res.status(400).json({ errors: "errors fetching comments" })
              )
          )
          .catch((error) =>
            res.status(400).json({ errors: "could not find post" })
          );
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  like_comment: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Comment.findById(req.params.comment_id).then((comment) => {
          if (comment.dislike.users.includes(user._id))
            comment.dislike.users.splice(
              comment.dislike.users.indexOf(user._id),
              1
            );
          if (!comment.like.users.includes(user._id))
            Comment.updateOne(
              { _id: comment._id },
              {
                author: comment.author,
                text: comment.text,
                like: {
                  users: [...comment.like.users, user._id],
                },
                dislike: comment.dislike,
              },
              {
                new: true,
                runValidators: true,
              }
            ).then((updatedComment) => res.status(200).json(user._id));
        });
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  dislike_comment: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Comment.findById(req.params.comment_id).then((comment) => {
          if (comment.like.users.includes(user._id))
            comment.like.users.splice(comment.like.users.indexOf(user._id), 1);
          if (!comment.dislike.users.includes(user._id))
            Comment.updateOne(
              { _id: comment._id },
              {
                author: comment.author,
                text: comment.text,
                dislike: {
                  users: [...comment.dislike.users, user._id],
                },
                like: comment.like,
              },
              {
                new: true,
                runValidators: true,
              }
            ).then((updatedComment) => res.status(200).json(user._id));
        });
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  delete_comment: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) =>
        Comment.findById(req.params.comment_id)
          .then((comment) => {
            if (String(user._id) === String(comment.author)) {
              Comment.findByIdAndDelete(req.params.comment_id)
                .then((result) => res.json(result))
                .catch((error) => res.status(400).json(error));
            }
          })
          .catch((error) => console.log(error))
      )
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
};
