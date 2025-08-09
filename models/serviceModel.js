const db = require('../config/db');

const Service = {
  findAll: () => db.query('SELECT * FROM services'),
  findById: (id) => db.query('SELECT * FROM services WHERE id = $1', [id]),
  create: (data) => {
    const { title, description, kecepatan, harga, harga_instalasi } = data;
    return db.query(
      `INSERT INTO services (title, description, kecepatan, harga, harga_instalasi)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, description, kecepatan, harga, harga_instalasi]
    );
  },
  update: (id, data) => {
    const { title, description, kecepatan, harga, harga_instalasi } = data;
    return db.query(
      `UPDATE services SET title=$1, description=$2, kecepatan=$3, harga=$4, harga_instalasi=$5, updated_at=NOW()
       WHERE id=$6 RETURNING *`,
      [title, description, kecepatan, harga, harga_instalasi, id]
    );
  },
  delete: (id) => db.query('DELETE FROM services WHERE id = $1', [id]),
};

module.exports = Service;
