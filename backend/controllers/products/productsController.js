import asyncHandler from 'express-async-handler';
import Product from '../../models/productModel.js';

// @desc Fetch All Products
// @route GET /api/products
// @access Public
export const getAllProducts = asyncHandler(async (req, res) => {
    
    const products = await Product.find({});

    res.json(products);

})

// @desc Fetch Single Product
// @route GET /api/products/:id
// @access Public
export const getProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: "Product not found" })
    }

})
