const marka=require('../models/markaModel.js');

const markaController={
    async getAll(req,res){
        try {
            const markas = await marka.getAll();
            res.json(markas);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async getById(req,res){
        const id = req.params.id;
        try {
            const markaData = await marka.getById(id);
            if (markaData) {
                res.json(markaData);
            } else {
                res.status(404).json({ error: 'Marka not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async create(req,res){
        const newMarka = req.body;
        if (!newMarka.markanev) {
            return res.status(400).json({ error: 'Missing required field: markanev' });
        }
        try {
            const createdMarka = await marka.create(newMarka);
            res.status(201).json(createdMarka);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async delete(req,res){
        const id = req.params.id;
        try {
            const success = await marka.delete(id);
            if (success) {
                res.json({ message: 'Marka deleted successfully' });
            }
            else {
                res.status(404).json({ error: 'Marka not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async update(req,res){
        const id = req.params.id;
        const updatedMarka = req.body;
        if (!updatedMarka.markanev) {
            return res.status(400).json({ error: 'Missing required field: markanev' });
        }
        try {
            const success = await marka.update(id, updatedMarka);
            if (success) {
                res.json({ message: 'Marka updated successfully' });
            }
            else {
                res.status(404).json({ error: 'Marka not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports=markaController;