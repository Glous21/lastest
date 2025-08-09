const db = require('../config/db');

const Benefit = {
  findAll: () => db.query('SELECT * FROM benefits'),
  findById: (id) => db.query('SELECT * FROM benefits WHERE id = $1', [id]),
  create: (data) => {
    const { title, description } = data;
    return db.query(
      `INSERT INTO benefits (title, description)
       VALUES ($1, $2) RETURNING *`,
      [title, description]
    );
  },
  update: (id, data) => {
    const { title, description } = data;
    return db.query(
      `UPDATE benefits SET title=$1, description=$2, updated_at=NOW()
       WHERE id=$3 RETURNING *`,
      [title, description, id]
    );
  },
  delete: (id) => db.query('DELETE FROM benefits WHERE id = $1', [id]),
};

module.exports = Benefit;
