const pool = require('../config/db');

const books = {};

books.getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM books');
  return rows;
};

books.getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM books WHERE id = ?', [id]);
  return rows[0];
};

books.create = async (books) => {
  const [result] = await pool.query('INSERT INTO books SET ?', [books]);
  return { id: result.insertId, ...books };
};

books.update = async (id, books) => {
  await pool.query('UPDATE books SET ? WHERE id = ?', [books, id]);
  return { id, ...books };
};

books.delete = async (id) => {
  await pool.query('DELETE FROM books WHERE id = ?', [id]);
  return { id };
};

module.exports = books;
