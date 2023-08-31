const express = require('express');
const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// gets a product by ID
router.get("/:id", async (req, res) => {
    try {
        const getProduct = await Product.findByPk(req.params.id, {
            include: [{ model: Category }, { model: Tag }],
        });
        if (getProduct) {
            res.status(200).json(getProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

// gets all products
router.get('/', async (req, res) => {
    try {
        const getProducts = await Product.findAll();
        res.status(200).json(getProducts);
    } catch (err) {
        res.status(500).json(err);
    }
});


// creates a new product
router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(500).json({ message: 'Error creating new product' });
    }
});

// updates a product by ID
router.put('/:id', async (req, res) => {
    try {
        const updateProduct = await Product.update(
            {
                product: req.body.product
            },
            {
                where: {
                    id: req.params.id
                }
            })
        res.json(updateProduct);
    } catch (err) {
        res.status(500).json({ message: 'Error updating product' });
    }
});

// deletes a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleteProduct = await Product.findByPkAndDelete(
            {
                product_name, tag_id: req.body.product_name
            },
            {
                where: {
                    id: req.params.id
                }
            })
        res.json(deleteProduct);
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete product' });
    }
});

module.exports = router;