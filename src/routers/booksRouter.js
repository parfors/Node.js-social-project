const express = require('express');
const router = new express.Router();
const {
  PostValidation,
  patchValidation,
} = require('../middlewares/validationMiddleware');
const {
  getPosts,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
} = require('../controllers/postsController');

router
    .get('/', getPosts)
    .get('/:id', getPostById)
    .post('/', PostValidation, addPost)
    .put('/:id', PostValidation, changePost)
    .patch('/:id', patchValidation, patchPost)
    .delete('/:id', deletePost);
module.exports = {postsRouter: router};
