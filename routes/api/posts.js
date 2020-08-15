const express = require("express");
const router = express.Router();
const passport = require("passport");

const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

const validatePostInput = require("../../validation/post");
const profile = require("../../validation/profile");
const { remove } = require("../../models/Post");

//@route  GET /api/posts
//@desc   Get Post
//@access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => res.status(404).json({ nopostfound: "No Post found" }));
});

//@route  GET /api/posts/:id
//@desc   Get Post by id
//@access Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => res.status(404).json({ nopostfound: "No Posts found" }));
});

//@route  POST /api/posts
//@desc   Create Post
//@access private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.user.name,
      avatar: req.user.avatar,
      user: req.user.id,
    });

    newPost.save().then((post) => res.json(post));
  }
);

//@route  DELETE /api/posts/:id
//@desc   Delete Post
//@access private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      Post.findById(req.params.id)
        .then((post) => {
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }
          post.remove().then(() => res.json({ success: true }));
        })
        .catch((err) =>
          res.status(404).json({ nopostfound: "No Posts found" })
        );
    });
  }
);

//@route  POST /api/posts/like/:id
//@desc   Like Post
//@access Public
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      Post.findById(req.params.id)
        .then((post) => {
          if (
            post.likes.filter((like) => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User already liked this post" });
          }

          //Add user id to likes array
          post.likes.unshift({ user: req.user.id });
          post.save().then((post) => res.json(post));
        })
        .catch((err) =>
          res.status(404).json({ nopostfound: "No Posts found" })
        );
    });
  }
);

//@route  POST /api/posts/unlike/:id
//@desc   Unlike Post
//@access Public
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      Post.findById(req.params.id)
        .then((post) => {
          if (
            post.likes.filter((like) => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res.status(400).json({ notliked: "You have not yet liked" });
          }

          //Get Remove Index
          const removeIndex = post.likes
            .map((item) => item.user.toString())
            .indexOf(req.user.id);

          //Splice out of the array
          post.likes.splice(removeIndex, 1);

          //Save
          post.save().then((post) => res.json(post));
        })
        .catch((err) =>
          res.status(404).json({ nopostfound: "No Posts found" })
        );
    });
  }
);

//@route  POST /api/posts/comment/:id
//@desc   Add a comment to a Post
//@access Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Post.findById(req.params.id)
      .then((post) => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id,
        };

        //Add to comments array
        post.comments.unshift(newComment);

        //Save
        post.save().then((post) => res.json(post));
      })
      .catch((err) => res.status(404).json({ nopostfound: "No Posts found" }));
  }
);

//@route  DELETE /api/posts/comment/:id/:comment_id
//@desc   Remove a comment from a Post
//@access Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then((post) => {
        //Check if the comment exist
        if (
          post.comments.filter(
            (comment) => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexist: "Comment does not exist" });
        }

        //Get remove index
        const removeIndex = post.comments
          .map((item) => item._id.toString())
          .indexOf(req.params.comment);

        //Splice comment out of array
        post.comments.splice(removeIndex, 1);
        post.save().then((post) => res.json(post));
      })
      .catch((err) => res.status(404).json({ nopostfound: "No Posts found" }));
  }
);

module.exports = router;
