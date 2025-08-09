const Testimonial = require('../models/testimonialModel');

exports.index = async (req, res) => {
  const result = await Testimonial.findAll();
  res.json(result.rows);
};

exports.store = async (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(422).json({ status: 'error', errors: 'All fields are required' });
  }

  const result = await Testimonial.create(req.body);
  res.status(201).json({ status: 'success', data: result.rows[0] });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const existing = await Testimonial.findById(id);
  if (existing.rows.length === 0) {
    return res.status(404).json({ status: 'error', message: 'Testimonial not found' });
  }

  const result = await Testimonial.update(id, req.body);
  res.json({ status: 'success', data: result.rows[0] });
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  const existing = await Testimonial.findById(id);
  if (existing.rows.length === 0) {
    return res.status(404).json({ status: 'error', message: 'Testimonial not found' });
  }

  await Testimonial.delete(id);
  res.json({ status: 'success', message: 'Testimonial deleted successfully' });
};
