const User = require('../models/userModel');
const userController = {};

userController.create = async (req, res) => {
    const { email, password, name, role, imagename } = req.body;
    try {
        const userId = await User.Create(email, password, name, role, imagename);
        res.status(201).json({ id: userId });
    } catch (err) {
        console.error(err);
        if (err.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ error: 'Email already exists' });
        } else {

        }    
    }
};

userController.login = async (req, res) => {
    const { email, password } = req.body;
    try {   
        const user = await User.findByUsernameAndPassword(email, password);
        if (user) {
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }   
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = userController;

