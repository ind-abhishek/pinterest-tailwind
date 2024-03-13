const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
  },

  description: {
    type: String,
  },

  postimage: String,
});

// Create Post model
module.exports = mongoose.model("Post", postSchema);
