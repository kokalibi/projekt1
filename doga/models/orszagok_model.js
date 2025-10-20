const pool = require('../config/db');
const Orszagok={};
Orszagok.getAll = async () =>{
    try{
        const [rows] = await pool.query("Select * from orszagok");
        return rows;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Orszagok.create = async (kod, nev, regio) =>{
    try{
        const [result] = await pool.query("Insert into orszagok (kod, nev, regio) values (?,?,?)",[kod, nev, regio]);
        return {id: result.insertId, kod, nev, regio};
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Orszagok.getById = async (id) =>{
    try{
        const [rows] = await pool.query("Select * from orszagok where id = ?",[id]);
        return rows[0];
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Orszagok.getByNev = async (nev) =>{
    try{
        const [rows] = await pool.query("Select * from orszagok where nev = ?",[nev]);
        return rows[0];
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Orszagok.getByKod = async (kod) =>{
    try{
        const [rows] = await pool.query("Select * from orszagok where kod = ?",[kod]);
        return rows[0];
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Orszagok.update = async (kod, nev, regio, id) =>{
    try{
        const [result] = await pool.query("Update orszagok set kod = ?, nev = ?, regio=? where id=?",[kod, nev, regio, id]);
        return result.affectedRows > 0;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Orszagok.delete = async (id) =>{
    try{
        const [result] = await pool.query("Delete from orszagok where id = ?",[id]);
        return result.affectedRows > 0;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Orszagok.getByKezdoBetuk = async (kezdo) => {
    try {
        const [rows] = await pool.query("SELECT * FROM orszagok WHERE nev LIKE ?", [kezdo + '%']);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
module.exports = Orszagok;
