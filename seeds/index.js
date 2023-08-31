const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });

        await seedTags();
        await seedProductTags();
        await seedCategories();
        await seedProducts();

        console.log('Seeding completed successfully!');
    } catch (error) {
        console.error('Error occurred while seeding:', error);
    } finally {
        await sequelize.close();
    }
};

seedAll();