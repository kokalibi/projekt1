const model = require('../model/idopontok_model');

const IdopontokController = {
    getAll: async (req, res) => {
        try {
            const idopontok = await model.getAll();
            res.json(idopontok);
        } catch (error) {
            res.status(500).json({ error: 'Hiba történt.' });
        }
    },
    getById: async (req, res) => {
        try {
            const idopont = await model.getById(req.params.id);
            idopont ? res.json(idopont) : res.status(404).json({ error: 'Nincs ilyen id!' }); 
        } catch (error) {
            res.status(500).json({ error: 'Hiba történt.' });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedIdopont = await model.update(id, data);
            res.json(updatedIdopont);
        } catch (error) {
            res.status(500).json({ error: 'Hiba történt a frissítéskor.' });
        }
    },
    create: async (req, res) => {
        const { name, idopont, description } = req.body;

        if (!name || name.length < 3) { 
            return res.status(400).json({ error: 'A név min. 3 karakter!' }); 
        }

        if (new Date(idopont) < new Date()) { 
            return res.status(400).json({ error: 'Az időpont nem lehet a múltban!' });
        }

        try {
            const list = await model.getAll();
            const exists = list.some(item => 
                new Date(item.idopont).getTime() === new Date(idopont).getTime()
            ); 
            
            if (exists) return res.status(409).json({ error: 'Ez az időpont már foglalt!' }); 

            const newIdo = await model.create({ name, idopont, description });
            res.status(201).json(newIdo); 
        } catch (error) {
            res.status(500).json({ error: 'Szerver hiba.' });
        }
    },
    // idopontok_controller.js
delete: async (req, res) => {
    try {
        const affectedRows = await model.delete(req.params.id);
        
        if (affectedRows === 0) {
            // Ha nem volt mit törölni, 404-et küldünk 
            return res.status(404).json({ error: 'Nincs ilyen időpont!' });
        }
        
        // Siker esetén 204 No Content [cite: 30]
        res.status(204).send(); 
        } catch (error) {
            res.status(500).json({ error: 'Hiba a törlésnél.' });
        }
    }
};
module.exports = IdopontokController;