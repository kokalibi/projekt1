const varosokModel = require('../model/varosok_model');

const varosokController = {
  getAll: async (req, res) => {
    try {
      const varosok = await varosokModel.getAll();
      res.json(varosok);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a városok lekérdezésekor.' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const varos = await varosokModel.getById(id);
      if (varos) {
        res.json(varos);
      } else {
        res.status(404).json({ error: 'Város nem található.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a város lekérdezésekor.' });
    }
  },

  create: async (req, res) => {
    const newVaros = req.body;
    try {
      const createdVaros = await varosokModel.create(newVaros);
      res.status(201).json(createdVaros);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a város létrehozásakor.' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const updatedVaros = req.body;
    try {
      const result = await varosokModel.update(id, updatedVaros);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a város frissítésekor.' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await varosokModel.delete(id);
      res.json({ message: 'Város sikeresen törölve.' });
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a város törlésekor.' });
    }
  }
};

module.exports = varosokController;
