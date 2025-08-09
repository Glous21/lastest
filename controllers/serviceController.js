const Service = require('../models/serviceModel');

exports.index = async (req, res) => {
  const result = await Service.findAll();
  res.json(result.rows);
};

exports.store = async (req, res) => {
  const { title, description, kecepatan, harga, harga_instalasi } = req.body;
  if (!title || !description || !kecepatan || !harga || !harga_instalasi) {
    return res.status(422).json({ status: 'error', errors: 'All fields are required' });
  }

  const result = await Service.create(req.body);
  res.status(201).json({ status: 'success', data: result.rows[0] });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const existing = await Service.findById(id);
  if (existing.rows.length === 0) return res.status(404).json({ status: 'error', message: 'Service not found' });

  const result = await Service.update(id, req.body);
  res.json({ status: 'success', data: result.rows[0] });
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  const existing = await Service.findById(id);
  if (existing.rows.length === 0) return res.status(404).json({ status: 'error', message: 'Service not found' });

  await Service.delete(id);
  res.json({ status: 'success', message: 'Service deleted successfully' });
};
