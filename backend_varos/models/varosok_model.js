const pool = require('../config/db');
const Varos={};
Varos.getAll = async () =>{
    try{
        const [rows] = await pool.query("Select * from varosok");
        return rows;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Varos.create = async (iranyitoszam, varos) =>{
    try{
        const [result] = await pool.query("Insert into varosok (iranyitoszam, varos) values (?,?)",[iranyitoszam, varos]);
        return {id: result.insertId, iranyitoszam, varos};
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Varos.getById = async (id) =>{
    try{
        const [rows] = await pool.query("Select * from varosok where id = ?",[id]);
        return rows[0];
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Varos.getByNev = async (varos) =>{
    try{
        const [rows] = await pool.query("Select * from varosok where varos = ?",[varos]);
        return rows[0];
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Varos.getByIranyitoszam = async (iranyitoszam) =>{
    try{
        const [rows] = await pool.query("Select * from varosok where iranyitoszam = ?",[iranyitoszam]);
        return rows[0];
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Varos.update = async (id, varos, iranyitoszam) =>{
    try{
        const [result] = await pool.query("Update varosok set varos = ?, iranyitoszam = ? where id = ?",[iranyitoszam, varos, id]);
        return result.affectedRows > 0;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Varos.delete = async (id) =>{
    try{
        const [result] = await pool.query("Delete from varosok where id = ?",[id]);
        return result.affectedRows > 0;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
module.exports = Varos;