const db = require('../config/db');

const Testimonial = {
  findAll: () => db.query('SELECT * FROM testimonials'),
  findById: (id) => db.query('SELECT * FROM testimonials WHERE id = $1', [id]),
  create: (data) => {
    const { name, message } = data;
    return db.query(
      `INSERT INTO testimonials (name, message)
       VALUES ($1, $2) RETURNING *`,
      [name, message]
    );
  },
  update: (id, data) => {
    const { name, message } = data;
    return db.query(
      `UPDATE testimonials SET name=$1, message=$2, updated_at=NOW()
       WHERE id=$3 RETURNING *`,
      [name, message, id]
    );
  },
  delete: (id) => db.query('DELETE FROM testimonials WHERE id = $1', [id]),
};

module.exports = Testimonial;
