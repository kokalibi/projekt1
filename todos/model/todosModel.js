const pool = require('../config/db');

const Todos={}

Todos.getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM todos');
  return rows;
};

Todos.getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [id]);
  return rows[0];
}

Todos.create = async (todo) => {
  const [result] = await pool.query('INSERT INTO todos SET ?', todo);
  return { id: result.insertId, ...todo };
};

Todos.update = async (id, todo) => {
  await pool.query('UPDATE todos SET ? WHERE id = ?', [todo, id]);
  return { id, ...todo };
};

Todos.delete = async (id) => {
  await pool.query('DELETE FROM todos WHERE id = ?', [id]);
  return { id };
};

module.exports = Todos;
