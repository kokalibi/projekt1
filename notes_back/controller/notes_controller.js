const NotesModel = require('../model/notes_model');

const NotesController = {};

NotesController.getAll = async (req, res) => {
  try {
    const notes = await NotesModel.getAll();
    res.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

NotesController.getById = async (req, res) => {
  try {
    const note = await NotesModel.getById(req.params.id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    console.error('Error fetching note:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

NotesController.create = async (req, res) => {
  try {
    const newNote = await NotesModel.create(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

NotesController.update = async (req, res) => {
  try {
    const updatedNote = await NotesModel.update(req.params.id, req.body);
    res.json(updatedNote);
  } catch (error) {
    console.error('Error updating note:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

NotesController.delete = async (req, res) => {
  try {
    const deletedRows = await NotesModel.delete(req.params.id);
    if (deletedRows) {
      res.json({ message: 'Note deleted successfully' });
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = NotesController;