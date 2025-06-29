import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({products});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProductsCategoryWise = async (req, res) => {
  try {
    const { cat } = req.query;
    console.log("Received category:", cat); 
    const products = await Product.find({ subSubCategory: cat });
    return res.json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getProductById = async (req, res) => {
    try {   
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.json({ 
            success: true,
            product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
