const { Product } = require('../models');

const productData = [
    {
        product_name: 'Halter-Top',
        price: 6.99,
        stock: 5,
        category_id: 3,
    },
    {
        product_name: 'High-Heels',
        price: 19.99,
        stock: 8,
        category_id: 4,
    },
    {
        product_name: 'Bell-Bottoms',
        price: 25.99,
        stock: 10,
        category_id: 2,
    },
    {
        product_name: 'Sun Dress',
        price: 17.99,
        stock: 20,
        category_id: 1,
    },
    {
        product_name: 'Tennis Skirt',
        price: 10.99,
        stock: 2,
        category_id: 5,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;