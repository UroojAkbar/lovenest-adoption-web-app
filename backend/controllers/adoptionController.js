// routes/adoptionRoutes.js
const express = require('express');
const router = express.Router();
const AdoptionForm = require('../models/AdoptionForm');

// POST: Submit adoption form
router.post('/submit-adoption-form', async (req, res) => {
  const { name, email, phone, cnic, cnicDate, addressOrCity, gender, ageRange, adoptionReason } = req.body;

  try {
    const newForm = new AdoptionForm({
      name,
      email,
      phone,
      cnic,
      cnicDate,
      addressOrCity,
      gender,
      ageRange,
      adoptionReason
    });
    await newForm.save();
    res.status(201).json({ message: 'Adoption form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit form', error });
  }
});

module.exports = router;
