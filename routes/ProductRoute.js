const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.post('/', ProductController.createProduct);
router.get('/',ProductController.getAllArticles);
router.get('/:id',ProductController.getArticleById);



module.exports = router;