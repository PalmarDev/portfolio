const express = require("express");

express.Router();

const router = express.Router();

const Post = require("../model/Post");

const upload = require("../middleware/image");

router.get("/", async (req, res) => {
  try {
    const filter = {};
    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      sort: { date_created: -1 },
    };
    if (req.query.title) {
      filter.title = req.query.title;
    }
    if (req.query.description) {
      filter.description = req.query.description;
    }
    if (req.query.user_id) {
      filter.user_id = req.query.user_id;
    }

    const posts = await Post.paginate({ ...filter }, options);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const post = new Post(req.body);
    if (req.file) {
      post.image = req.file.path;
    }
    const result = await post.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.patch("/:id", upload.single("image"), async (req, res) => {
  try {
    const result = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
