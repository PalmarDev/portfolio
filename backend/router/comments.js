const express = require("express");

express.Router();

const router = express.Router();

const Comment = require("../model/Comment");

router.get("/", async (req, res) => {
  try {
    const filter = {};
    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      sort: { date_created: -1 },
    };
    if (req.query.user_id) {
      filter.user_id = req.query.user_id;
    }
    if (req.query.post_id) {
      filter.post_id = req.query.post_id;
    }
    const comments = await Comment.paginate({ ...filter }, options);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const result = await comment.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const result = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
