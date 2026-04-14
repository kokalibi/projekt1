const booksModel = require('../models/books_model');

const booksController = {
  getAll: async (req, res) => {
    try {
      const books = await booksModel.getAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a könyvek lekérdezésekor.' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await booksModel.getById(id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Könyv nem található.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a könyv lekérdezésekor.' });
    }
  },

  create: async (req, res) => {
    const newBook = req.body;
    try {
      const createdBook = await booksModel.create(newBook);
      res.status(201).json(createdBook);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a könyv létrehozásakor.' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const updatedBook = req.body;
    try {
      const result = await booksModel.update(id, updatedBook);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a könyv frissítésekor.' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await booksModel.delete(id);

      if (result && result.affectedRows > 0) {
        res.json({ message: 'Könyv sikeresen törölve.' });
      } else {
        res.status(404).json({ error: 'Könyv nem található, így nem törölhető.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Hiba történt a könyv törlésekor.' });
    }
}
};

module.exports = booksController;
