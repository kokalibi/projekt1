const Jegyzet = require('../models/jegyzetekModell');
const { get } = require('../routes');

const jegyzetekController = {
    async getAll(req,res){
        try {
            const jegyzetek = await Jegyzet.getAll();
            res.json(jegyzetek);
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async create(req,res){
        try {
            const {cim, tartalom} = req.body;
            if (!cim || !tartalom) {
                return res.status(400).json({error: 'A "cim" és "tartalom" mezők kötelezőek!'});
            }
            const newJegyzet = await Jegyzet.create(cim, tartalom);
            res.status(201).json(newJegyzet);
        } catch (error) {
            res.status(500).json({error:'Internal Server error', details: error.message});
        }
    },
    async getById(req,res){
        try {
            const {id} = req.params;
            const jegyzet = await Jegyzet.getById(id);
            if(jegyzet){
                res.json(jegyzet);
            }
            else{
                res.status(404).json({error:'Jegyzet not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async getByCim(req,res){
        try {
            const {cim} = req.params;
            const jegyzet = await Jegyzet.getByCim(cim);
            if(jegyzet){
                res.json(jegyzet);
            }
            else{
                res.status(404).json({error:'Jegyzet not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async getByPublic(req,res){
        try {
            const {public} = req.params;
            const jegyzet = await Jegyzet.getByPublic(public);
            if(jegyzet){
                res.json(jegyzet);
            }
            else{
                res.status(404).json({error:'Jegyzet not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async update(req,res){
        try {
            const {id} = req.params;
            const {cim, tartalom} = req.body;
            const updatedJegyzet = await Jegyzet.update(id, cim, tartalom);
            if(updatedJegyzet){
                res.json(updatedJegyzet);
            }
            else{
                res.status(404).json({error:'Jegyzet not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    },
    async delete(req,res){
        try {
            const {id} = req.params;
            const deleted = await Jegyzet.delete(id);
            if(deleted){
                res.json({message:'Jegyzet deleted successfully'});
            }
            else{
                res.status(404).json({error:'Jegyzet not found'});
            }
        } catch (error) {
            res.status(500).json({error:'Internal Server error'});
        }
    }
}

module.exports = jegyzetekController;