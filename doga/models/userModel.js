const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {};

User.Create = async (email, password, name, role, imagename) => {
    const passwordHash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
        'INSERT INTO users (email, password, name, role, imagename) VALUES (?,?,?,?,?)', 
        [email, passwordHash, name, role, imagename]
    );
    return result.insertId;
};

  User.findByUsername = async (email) => {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0];
  }

  // Username + jelszó ellenőrzés
  User.findByUsernameAndPassword = async (email, password) => {
    const user = await User.findByUsername(email);
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;

    return user; // csak ha helyes a jelszó
  }


User.getById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM varosok WHERE id = ?', [id]);
    return rows[0];
};

module.exports = User;