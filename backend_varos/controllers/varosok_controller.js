const Varos=require('../models/varosok_model');
const varosokController={
    async getAll(req,res){
        try {
            const varosok=await Varos.getAll();
            res.json(varosok);
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async create(req,res){
        try {
            const {iranyitoszam, varos}=req.body;
            if(!varos || !iranyitoszam){
                return res.status(400).json({error:'A "varos", "iranyitoszam" mezők kötelezőek!'});
            }
            const newVaros=await Varos.create(iranyitoszam, varos);
            res.status(201).json(newVaros);
        } catch (error) {
            res.status(500).json({error:'Internal Server error', details: error.message});
        }
    },
    async getById(req,res){
        try {
            const {id}=req.params;
            const varos=await Varos.getById(id);
            if(varos){
                res.json(varos);
            }
            else{
                res.status(404).json({error:'Varos not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async getByNev(req,res){
        try {
            const {varos}=req.params;
            const vaross=await Varos.getByNev(varos);
            if(vaross){
                res.json(vaross);
            }
            else{
                res.status(404).json({error:'Varos not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async getByIranyitoszam(req,res){
        try {
            const {iranyitoszam}=req.params;
            const varos=await Varos.getByIranyitoszam(iranyitoszam);
            if(varos){
                res.json(varos);
            }
            else{
                res.status(404).json({error:'Varos not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async update(req,res){
        try {
            const {id}=req.params;
            const {iranyitoszam, varos}=req.body;
            const updatedVaros=await Varos.update(id,iranyitoszam ,varos);
            if(updatedVaros){
                res.json(updatedVaros);
            }
            else{
                res.status(404).json({error:'Varos not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async delete(req,res){
        try {
            const {id}=req.params;
            const deleted=await Varos.delete(id);
            if(deleted){
                res.json({message:'Varos deleted successfully'});
            }
            else{
                res.status(404).json({error:'Varos not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    }
};
module.exports=varosokController;