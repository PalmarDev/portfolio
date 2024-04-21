const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  description: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 500,
  },
  image: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
