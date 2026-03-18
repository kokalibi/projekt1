const pool = require('../config/db');

const Varosok = {};

Varosok.getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM varosok');
  return rows;
};

Varosok.getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM varosok WHERE id = ?', [id]);
  return rows[0];
};

Varosok.create = async (varos) => {
  const [result] = await pool.query('INSERT INTO varosok SET ?', [varos]);
  return { id: result.insertId, ...varos };
};

Varosok.update = async (id, varos) => {
  await pool.query('UPDATE varosok SET ? WHERE id = ?', [varos, id]);
  return { id, ...varos };
};

Varosok.delete = async (id) => {
  await pool.query('DELETE FROM varosok WHERE id = ?', [id]);
  return { id };
};

module.exports = Varosok;
