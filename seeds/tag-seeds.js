const { Tag } = require('../models');

const tagInfo = [
    {
        tag_name: 'short',
    },
    {
        tag_name: 'Bo-ho',
    },
    {
        tag_name: 'pink',
    },
    {
        tag_name: 'orange',
    },
    {
        tag_name: 'long',
    },
    {
        tag_name: 'purple',
    },
    {
        tag_name: 'black',
    },
    {
        tag_name: 'trendy',
    },
    {
        tag_name: 'Stylish',
    },
    {
        tag_name: 'red',
    },
];

const seedTags = () => Tag.bulkCreate(tagInfo);

module.exports = seedTags;