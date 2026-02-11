const pool = require('../config/db');

const Varosok={}

Varosok.getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM varosok');
  return rows;
};

module.exports = Varosok;
