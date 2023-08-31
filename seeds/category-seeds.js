const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Dresses',
    },
    {
        category_name: 'Pants',
    },
    {
        category_name: 'Shirts',
    },
    {
        category_name: 'Shoes',
    },
    {
        category_name: 'Skirts',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;