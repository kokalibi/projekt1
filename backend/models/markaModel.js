const pool = require('../config/db');
const Marka={};

Marka.getAll = async () => {
    try {
    const [rows] = await pool.query('SELECT * FROM marka');
    return rows;
    } 
    catch (error) {
        console.error('Error fetching data from marka table:', error);
        throw error;
    }
}
Marka.getById = async (id) => {
    try {
    const [rows] = await pool.query('SELECT * FROM marka WHERE id = ?', [id]);
    return rows[0];
    } 
    catch (error) {
        console.error('Error fetching data from marka table by ID:', error);
        throw error;
    }
}
Marka.create = async (data) => {
    try {
    const [result] = await pool.query('INSERT INTO marka (markanev) VALUES (?)', [data.markanev]);
    return { id: result.insertId, ...data };
    }
    catch (error) {
        console.error('Error inserting data into marka table:', error);
        throw error;
    }
}
Marka.delete = async (id) => {
    try {
    const [result] = await pool.query('DELETE FROM marka WHERE id = ?', [id]);
    return result.affectedRows > 0;
    }
    catch (error) {
        console.error('Error deleting data from marka table:', error);
        throw error;
    }
}
Marka.update = async (id, data) => {
    try {
    const [result] = await pool.query('UPDATE marka SET markanev = ? WHERE id = ?', [data.markanev, id]);
    return result.affectedRows > 0;
    }
    catch (error) {
        console.error('Error updating data in marka table:', error);
        throw error;
    }
}
module.exports = Marka;
