const pool = require('../config/db');

const Idopontok = {};

Idopontok.getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM idopontok');
  return rows;
};

Idopontok.getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM idopontok WHERE id = ?', [id]);
  return rows[0];
};

Idopontok.create = async (data) => {
  const [result] = await pool.query('INSERT INTO idopontok SET ?', [data]);
  return { id: result.insertId, ...data };
};

Idopontok.update = async (id, data) => {
  await pool.query('UPDATE idopontok SET ? WHERE id = ?', [data, id]);
  return { id, ...data };
};

Idopontok.delete = async (id) => {
  const [result] = await pool.query('DELETE FROM idopontok WHERE id = ?', [id]);
  return result.affectedRows; 
};

module.exports = Idopontok;
