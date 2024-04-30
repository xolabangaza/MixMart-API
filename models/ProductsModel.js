const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  rate:  Number,
  reviews: [ String],
  category: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  onpromo: Boolean
});

const Product = mongoose.model('Products', productSchema);
module.exports = Product