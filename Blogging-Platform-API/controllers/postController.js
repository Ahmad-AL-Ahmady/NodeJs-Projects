const Post = require('../models/postModel');
const catchAsync = require('../utils/catchAsync');

const getAllPosts = catchAsync(async (req, res) => {
  // Fetch all posts from the database
  const posts = await Post.find();
  // Return them in JSON format
  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: {
      posts,
    },
  });
});

module.exports = {
  getAllPosts,
};
