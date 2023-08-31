const express = require('express');
const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// gets a tag by ID
router.get("/:id", async (req, res) => {
    try {
        const getTag = await Tag.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(getTag);
    } catch (err) {
        res.status(500).json({ message: "Tag not found" });
    }
});

// gets all Tags
router.get('/', async (req, res) => {
    try {
        const getTags = await Tag.findAll(req.body, {
            include: [{ model: Category }, { model: Tag }],
        });
        res.status(200).json(getTags);
    } catch (err) {
        res.status(500).json({ message: "Tag not found" });
    }
});

// creates a new tag
router.post('/', async (req, res) => {
    try {
        const newTag = await Tag.create(req.body);
        res.status(200).json(newTag);
    } catch (err) {
        res.status(500).json({ message: 'Error creating new tag' });
    }
});

// update a tag by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedTag = await Tag.update(
            {
                tag_name: req.body.tag_name
            },
            {
                where: {
                    id: req.params.id
                }
            })
        res.json(updatedTag);
    } catch (err) {
        res.status(500).json({ message: 'Error updating tag' });
    }
});

// deletes a tag by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleteTag = await Tag.findByIdAndDelete(
            {
                tag_name: req.body.tag_name
            },
            {
                where: {
                    id: req.params.id
                }
            })
        res.json(deleteTag);
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete Tag' });
    }
});

module.exports = router;