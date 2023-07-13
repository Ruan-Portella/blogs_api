const authService = require('../services/authService');

const signIn = async (req, res) => {
    const { email, password } = req.body;
    const result = await authService.signIn(email, password);
    if (result.message) return res.status(400).json({ message: result.message });
    res.status(200).json({ token: result });
};

module.exports = { signIn };