const userService = require('../services/userService');

const signUp = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const result = await userService.signUp(displayName, email, password, image);
    if (result.message) return res.status(409).json({ message: result.message });
    return res.status(201).json({ token: result });
};

const getUsers = async (req, res) => {
    const result = await userService.getUsers();
    return res.status(200).json(result);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const result = await userService.getUserById(id);
    if (result.message) return res.status(404).json({ message: result.message });
    return res.status(200).json(result);
};

module.exports = { signUp, getUsers, getUserById };