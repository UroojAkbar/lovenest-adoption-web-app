// models/AdoptionForm.js
const mongoose = require('mongoose');

const adoptionFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cnic: { type: String, required: true },
  cnicDate: { type: Date, required: true },
  addressOrCity: { type: String, required: true },
  gender: { type: String, required: true },
  ageRange: { type: String, required: true },
  adoptionReason: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AdoptionForm', adoptionFormSchema);
