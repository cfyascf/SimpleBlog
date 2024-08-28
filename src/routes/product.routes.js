const express = require('express')
const router = express.Router();
const Product = require('../models/product.model')

router.post('/api/v1/product', async (req, res) => {
    const { name, category, description, price } = req.body

    const data = {
        name: name,
        category: category,
        description: description,
        price: price
    }

    const newProduct = await Product.create(data)
    return res.status(201).send({ message: "Product registered successfully!", body: newProduct })
})

router.get('/api/v1/product', async (req, res) => {
    const products = await Product.find()
    return res.status(200).send({ message: "Fetch successfull!", body: products})
})

module.exports = router;