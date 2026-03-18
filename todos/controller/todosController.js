const todosModel = require('../model/todosModel');

const todosController = {
    getAll: async (req, res) => {
        try {
            const todos = await todosModel.getAll();
            res.json(todos);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch todos' });
        }
    },
    getById: async (req, res) => {
        try {
            const todo = await todosModel.getById(req.params.id);
            if (todo) {
                res.json(todo);
            } else {
                res.status(404).json({ error: 'Todo not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch todo' });
        }
    },
    create: async (req, res) => {
        try {
            const newTodo = await todosModel.create(req.body);
            res.status(201).json(newTodo);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create todo' });
        }
    },
    update: async (req, res) => {
        try {
            const updatedTodo = await todosModel.update(req.params.id, req.body);
            res.json(updatedTodo);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update todo' });
        }
    },
    delete: async (req, res) => {
        try {
            await todosModel.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete todo' });
        }
    }
};

module.exports = todosController;
