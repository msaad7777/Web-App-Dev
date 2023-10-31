const express = require('express');
const Product = require('../models/product');
// Your routes here

const {
    getAllProducts, getProductById, addProduct, updateProduct, deleteProduct, deleteAllProducts, findProductsByName
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.delete('/', deleteAllProducts);
router.get('/?name=[kw]', findProductsByName);

module.exports = router;
