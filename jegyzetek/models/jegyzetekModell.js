const pool = require('../config/db');
const Jegyzetek ={};


Jegyzetek.getAll = async () =>{
    try{
        const [rows] = await pool.query("Select * from jegyzetek");
        return rows;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Jegyzetek.create = async (cim, tartalom) =>{
    try{
        const [result] = await pool.query("Insert into jegyzetek (cim, tartalom) values (?,?)",[cim, tartalom]);
        return {id: result.insertId, cim, tartalom};
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Jegyzetek.getById = async (id) =>{
    try{
        const [rows] = await pool.query("Select * from jegyzetek where id = ?",[id]);
        return rows[0];
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Jegyzetek.getByCim = async (cim) =>{
    try{
        const [rows] = await pool.query("Select * from jegyzetek where cim = ?",[cim]);
        return rows[0];
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Jegyzetek.getByPublic = async (isPublic) =>{
    try{
        const [rows] = await pool.query("Select * from jegyzetek where public = ?",[isPublic]);
        return rows;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Jegyzetek.update = async (id, cim, tartalom, isPublic) =>{
    try{
        const [result] = await pool.query("Update jegyzetek set cim = ?, tartalom = ?, public = ? where id = ?",[cim, tartalom, isPublic, id]);
        return result.affectedRows > 0;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};
Jegyzetek.delete = async (id) =>{
    try{
        const [result] = await pool.query("Delete from jegyzetek where id = ?",[id]);
        return result.affectedRows > 0;
    }
    catch(error){
        console.error(error)
        throw error;
    }
};

module.exports = Jegyzetek;