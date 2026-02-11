const Varosok = require('../models/varosokModel');

const getAllVarosok = async (req, res) => {
  try {
    const varosok = await Varosok.getAll();
    res.json(varosok);
  } catch (error) {
    console.error('Error fetching varosok:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllVarosok
};
