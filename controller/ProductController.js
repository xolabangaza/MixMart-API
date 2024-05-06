
const Product = require('../models/ProductsModel');
const mongoose = require('mongoose')

exports.createproduct = async (req, res) => {
  try {
    // const {title, image} = req.body
    const product = new Product(req.body);

    console.log(product)
    const savedproduct = await product.save();

    res.status(201).json(savedproduct);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllArticles =  async (req, res)=>{
  try{
    const allArticles = await Product.find({})

    if(!allArticles){
      console.log("Could not get all items")
      return res.status(404).send({message: "Could not get Items from the DB"})
    }
    return res.status(200).send({message: "Retrieved all article successfully", allArticles})
  }catch(err){
    console.error("Some occured in the server")
    return res.status(500).send({message: "An error occured in the server", err})
  }
}

exports.getArticleById = async (req, res) => {
  try {
    
    const { id } = req.params;

    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    
    const product = await Product.findById(id); 

    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    
    res.json(product);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ message: 'Error getting product' });
  }
};