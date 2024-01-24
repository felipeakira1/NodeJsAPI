const { insertUser } = require('../models/userModel');

async function addUser(req, res) {
    try {
        const user = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };
        console.log(user);
        
        const result = await insertUser(user);
        res.status(201).json({success: true, message: 'User created successfully', userId: result.insertId });
    } catch(error) {
        console.error('Error adding user: ', error);
        res.status(500).json({success: false, message: 'Error adding user'});
    }
}

module.exports = {
    addUser
};