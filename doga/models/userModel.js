const pool =require('../config/db');
const bcrypt = require('bcryptjs');
const User={};
User.create= async (username,email ,password, role)=>{
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.execute(
        'INSERT INTO emberek (username,email ,password, jogosultsag) VALUES (?, ?, ?,?)',
        [username,email ,hashedPassword, role]
    );
    return result.insertId;
};

User.findByUsername= async (username)=>{
    const [rows] = await pool.execute(
        'SELECT * FROM emberek WHERE username = ?',
        [username]
    );
    return rows[0];
};