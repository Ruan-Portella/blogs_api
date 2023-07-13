const userService = require('../services/userService');

const signUp = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const result = await userService.signUp(displayName, email, password, image);
    if (result.message) return res.status(409).json({ message: result.message });
    return res.status(201).json({ token: result });
};

module.exports = { signUp };