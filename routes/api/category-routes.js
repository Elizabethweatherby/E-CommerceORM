const router = require('express').Router();
const { Category, Product } = require('../../models');


// gets a category by ID
router.get('/:id', async (req, res) => {
    try {
        const getCategory = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
        if (getCategory) {
            res.status(200).json(getCategory);
        } else {
            res.status(404).json({ message: 'Not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

// gets all categories
router.get('/', async (req, res) => {
    try {
        const getCategories = await Category.findAll();
        res.status(200).json(getCategories);
    } catch (err) {
        res.status(500).json(err);
    }
});

// updates a category by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedCategory = await Category.update(
            {
                category_name: req.body.category_name
            },
            {
                where: {
                    id: req.params.id
                }
            })
        res.json(updatedCategory);
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

// creates a new category
router.post('/', async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

// deletes a category
router.delete('/:id', async (req, res) => {
    try {
        const deletedCategory = await Category.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(deletedCategory);
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
});

module.exports = router;