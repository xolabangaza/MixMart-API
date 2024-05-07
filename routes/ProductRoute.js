const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.post('/', ProductController.createproduct);
router.get('/',ProductController.getAllArticles);
router.get('/:id',ProductController.getArticleById);
g


module.exports = router;