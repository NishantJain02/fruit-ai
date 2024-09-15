const express = require('express');
const router = express.Router();  // Initialize the router
const Faq = require('../models/Faq'); // Import the Faq model
const auth = require('../middleware/auth'); // Import the authentication middleware

// GET all FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single FAQ by ID
router.get('/:id', async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new FAQ
router.post('/', auth, async (req, res) => {
  const faq = new Faq({
    question: req.body.question,
    answer: req.body.answer
  });

  try {
    const newFaq = await faq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) an FAQ by ID
router.put('/:id', auth, async (req, res) => {
  try {
    const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    res.json(faq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an FAQ by ID
router.delete('/:id', auth, async (req, res) => {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    res.json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;  // Export the router
