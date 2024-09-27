const Post = require("../models/post.models");
const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

module.exports = {
  new_post: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.create({ author: user._id, text: req.body.text }).then((post) =>
          res.status(200).json(post)
        );
      })

      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  all_posts: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.find()
          .sort({ createdAt: -1 })
          .populate("author")
          .then((posts) => {
            res.status(200).json(posts);
          })
          .catch((error) => status(400).json({ erros: "error pulling posts" }));
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  like_post: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.findById(req.body._id)
          .then((post) => {
            if (post.dislike.users.includes(user._id))
              post.dislike.users.splice(
                post.dislike.users.indexOf(user._id),
                1
              );
            if (!post.like.users.includes(user._id))
              Post.updateOne(
                { _id: post._id },
                {
                  author: post.author,
                  text: post.text,
                  like: {
                    users: [...post.like.users, user._id],
                  },
                  dislike: post.dislike,
                },
                {
                  new: true,
                  runValidators: true,
                }
              ).then((updatedPost) => res.status(200).json(user._id));
          })
          .catch((error) =>
            res.status(400).json({ erros: "error updating like" })
          );
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  unlike_post: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.findById(req.body._id).then((post) => {
          if (post.like.users.includes(user._id)) {
            post.like.users.splice(post.like.users.indexOf(user._id), 1);
            Post.updateOne(
              {
                _id: post._id,
              },
              {
                author: post.author,
                text: post.text,
                like: post.like,
                dislike: post.dislike,
              },
              {
                new: true,
                runValidators: true,
              }
            ).then((updatedPost) => res.status(200).json(user._id));
          }
        });
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  dislike_post: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.findById(req.body._id)
          .then((post) => {
            if (post.like.users.includes(user._id))
              post.like.users.splice(post.like.users.indexOf(user._id), 1);
            if (!post.dislike.users.includes(user._id))
              Post.updateOne(
                { _id: post._id },
                {
                  author: post.author,
                  text: post.text,
                  like: post.like,
                  dislike: {
                    users: [...post.dislike.users, user._id],
                  },
                },
                {
                  new: true,
                  runValidators: true,
                }
              ).then((updatedPost) => res.status(200).json(user._id));
          })
          .catch((error) =>
            res.status(400).json({ erros: "error updating like" })
          );
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  undislike_post: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) => {
        Post.findById(req.body._id).then((post) => {
          if (post.dislike.users.includes(user._id)) {
            post.dislike.users.splice(post.dislike.users.indexOf(user._id), 1);
            Post.updateOne(
              {
                _id: post._id,
              },
              {
                author: post.author,
                text: post.text,
                like: post.like,
                dislike: post.dislike,
              },
              {
                new: true,
                runValidators: true,
              }
            ).then((updatedPost) => res.status(200).json(user._id));
          }
        });
      })
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
  delete_post: async (req, res) => {
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) =>
        Post.findById(req.params.post_id)
          .then((post) => {
            if (String(user._id) === String(post.author)) {
              Post.findByIdAndDelete(req.params.post_id)
                .then((result) => res.json(result))
                .catch((error) => res.status(400).json(error));
            }
          })
          .catch((error) => console.log(error))
      )
      .catch((error) => res.status(400).json({ errors: "please log in" }));
  },
};
