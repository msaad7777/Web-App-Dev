const Product = require('../models/product');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new product
exports.addProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const product = await newProduct.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete all products
exports.deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        res.status(200).json({ message: "All products deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find products by name
exports.findProductsByName = async (req, res) => {
    try {
        const products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
