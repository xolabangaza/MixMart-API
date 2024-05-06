const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
});

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }, 
  description: { type: String, required: true },
  reviews: [reviewSchema], 
  category: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  onpromo: { type: Boolean, default: false },
},
{ timestamps: true });


productSchema.method('toJSON', function() {
  const {__v,_id, ...object} = this.toObject()
  object.id = _id
  return object 
})

const Product = mongoose.model('Products', productSchema);
module.exports = Product