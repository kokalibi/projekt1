const Orszag=require('../models/orszagok_model');
const orszagokController={
    async getAll(req,res){
        try {
            const orszagok=await Orszag.getAll();
            res.json(orszagok);
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async create(req,res){
        const {kod, nev, regio}=req.body;
        if (!kod || !nev || !regio) {
            return res.status(400).json({error: 'A "kod", "nev" és "regio" mezők kötelezőek!'});
        }
        try {
            const newOrszag=await Orszag.create(kod, nev, regio);
            res.status(201).json(newOrszag);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({error: 'Az adott kód már létezik!'});
            }
            res.status(500).json({error:'Internal Server error'});
        }
        
    },
    async getById(req,res){
        const {id}=req.params;
        if (!id) {
            return res.status(400).json({error: 'Az "id" paraméter kötelező!'});
        }
        try {
            const orszag=await Orszag.getById(id);
            if(orszag){
                res.json(orszag);
            }
            else{
                res.status(404).json({error:'Orszag not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async update(req,res){
        const {id} = req.params;
        const {kod, nev, regio} = req.body;
        if (!nev) {
            return res.status(422).json({error: 'A "nev" mező kötelező!'});
        }
        try {
            const success = await Orszag.update(kod, nev, regio, id);
            if(success){
                res.json({message:'Orszag updated successfully'});
            }
            else{
                res.status(404).json({error:'Orszag not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async getByNev(req,res){
        const {nev}=req.params;
        try {
            const orszag=await Orszag.getByNev(nev);
            if(orszag){
                res.json(orszag);
            }
            else{
                res.status(404).json({error:'Orszag not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async delete(req,res){
        const {id}=req.params;
        try {
            const success=await Orszag.delete(id);
            if(success){
                res.json({message:'Orszag deleted successfully'});
            }
            else{
                res.status(404).json({error:'Orszag not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async getByKezdoBetuk(req,res){
        const {kezdo}=req.params;
        try {
            const orszagok=await Orszag.getByKezdoBetuk(kezdo);
            res.json(orszagok);
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    }
};
module.exports=orszagokController;
