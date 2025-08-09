const Benefit = require('../models/benefitModel');

exports.index = async (req, res) => {
  const result = await Benefit.findAll();
  res.json(result.rows);
};

exports.store = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(422).json({ status: 'error', errors: 'All fields are required' });
  }

  const result = await Benefit.create(req.body);
  res.status(201).json({ status: 'success', data: result.rows[0] });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const existing = await Benefit.findById(id);
  if (existing.rows.length === 0) {
    return res.status(404).json({ status: 'error', message: 'Benefit not found' });
  }

  const result = await Benefit.update(id, req.body);
  res.json({ status: 'success', data: result.rows[0] });
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  const existing = await Benefit.findById(id);
  if (existing.rows.length === 0) {
    return res.status(404).json({ status: 'error', message: 'Benefit not found' });
  }

  await Benefit.delete(id);
  res.json({ status: 'success', message: 'Benefit deleted successfully' });
};
