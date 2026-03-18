const pool = require('../config/db');

const Lakossag = {};

Lakossag.getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM lakossag');
  return rows;
};

Lakossag.getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM lakossag WHERE id = ?', [id]);
  return rows[0];
};

Lakossag.create = async (lakossag) => {
  const [result] = await pool.query('INSERT INTO lakossag SET ?', [lakossag]);
  return { id: result.insertId, ...lakossag };
};

Lakossag.update = async (id, lakossag) => {
  await pool.query('UPDATE lakossag SET ? WHERE id = ?', [lakossag, id]);
  return { id, ...lakossag };
};

Lakossag.delete = async (id) => {
  await pool.query('DELETE FROM lakossag WHERE id = ?', [id]);
  return { id };
};

module.exports = Lakossag;
