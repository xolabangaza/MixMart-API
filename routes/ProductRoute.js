const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.post('/', ProductController.createproduct);
// router.get('/',ProductController.getAllProducts);

// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...
module.exports = router;