const lakossagModel = require('../model/lakossag_model');

const lakossagController = {
  getAll: async (req, res) => {
    try {
      const lakossag = await lakossagModel.getAll();
      res.json(lakossag);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a lakosság lekérdezésekor.' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const lakossag = await lakossagModel.getById(id);
      if (lakossag) {
        res.json(lakossag);
      } else {
        res.status(404).json({ error: 'Lakosság nem található.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a lakosság lekérdezésekor.' });
    }
  },

  create: async (req, res) => {
    const newLakossag = req.body;
    try {
      const createdLakossag = await lakossagModel.create(newLakossag);
      res.status(201).json(createdLakossag);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a lakosság létrehozásakor.' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const updatedLakossag = req.body;
    try {
      const result = await lakossagModel.update(id, updatedLakossag);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a lakosság frissítésekor.' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await lakossagModel.delete(id);
      res.json({ message: 'Lakosság sikeresen törölve.' });
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a lakosság törlésekor.' });
    }
  }
};

module.exports = lakossagController;
