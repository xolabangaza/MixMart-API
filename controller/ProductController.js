
const Product = require('../models/ProductsModel');

exports.createproduct = async (req, res) => {
  try {
    // const {title, image} = req.body
    const product = new Product(req.body);

    const savedproduct = await product.save();

    res.status(201).json(savedproduct);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};