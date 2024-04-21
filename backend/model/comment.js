const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const postSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  description: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
    inmutable: true,
  },
  date_updated: {
    type: Date,
    default: Date.now,
  },
});

postSchema.plugin(paginate);

const Comment = mongoose.model("Comment", postSchema);

module.exports = Comment;
