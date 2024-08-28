const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    name: String,
    category: String,
    description: String,
    price: Number
})

module.exports = Product;