const pool = require('../config/db');

const Notes = {};

Notes.getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM notes');
  return rows;
},
Notes.getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
  return rows[0];
},
Notes.create = async (data) => {
  const [result] = await pool.query('INSERT INTO notes SET ?', [data]);
  return { id: result.insertId, ...data };
},
Notes.update = async (id, data) => {
  await pool.query('UPDATE notes SET ? WHERE id = ?', [data, id]);
  return { id, ...data };
},
Notes.delete = async (id) => {
  const [result] = await pool.query('DELETE FROM notes WHERE id = ?', [id]);
  return result.affectedRows; 
};

module.exports = Notes;
