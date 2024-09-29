const Post = require('../models/postModel');
const ApiFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

const getAllPosts = catchAsync(async (req, res) => {
  // Fetch all posts from the database
  const features = new ApiFeatures(Post.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .search();

  const posts = await features.query;
  // Return them in JSON format
  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: {
      posts,
    },
  });
});

const createPost = catchAsync(async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      post,
    },
  });
});

const getPost = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) return new AppError('Post not found', 400); // 400 => BAD REQUEST

  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});

const updatePost = catchAsync(async (req, res, next) => {
  req.body.updatedAt = Date.now();

  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!post) return new AppError('Post not found', 400);

  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});

const deletePost = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return new AppError('Post not found', 400);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

module.exports = {
  getAllPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
};
