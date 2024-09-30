const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Posts must have a title'],
    unique: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
  },
  content: {
    type: String,
    required: [true, 'Posts must have content'],
  },
  category: {
    type: String,
    required: [true, 'Posts must belong to a category'],
  },
  tags: {
    type: [String],
    required: [true, 'Posts must have at least one tag'],
    validate: {
      validator: function (val) {
        return val.length > 0;
      },
      message: 'Tags must have at 1 tag',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
