const express = require('express');
const router = express.Router();
const Capsule = require('../models/capsule.js');

// GET all capsules
router.get('/', async (req, res) => {
  try {
    const capsules = await Capsule.find();
    res.json(capsules);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// GET capsule by ID
router.get('/:id', async (req, res) => {
  try {
    const capsule = await Capsule.findById(req.params.id);
    if (!capsule) return res.status(404).json({ message: 'Capsule not found' });
    res.json(capsule);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// POST new capsule
router.post('/', async (req, res) => {
  try {
    const { title, description, content } = req.body;
    const newCapsule = new Capsule({ title, description, content });
    const capsule = await newCapsule.save();
    res.json(capsule);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// PUT update capsule by ID
router.put('/:id', async (req, res) => {
  try {
    const { title, description, content } = req.body;
    let capsule = await Capsule.findById(req.params.id);
    if (!capsule) return res.status(404).json({ message: 'Capsule not found' });

    capsule.title = title || capsule.title;
    capsule.description = description || capsule.description;
    capsule.content = content || capsule.content;

    await capsule.save();
    res.json(capsule);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
