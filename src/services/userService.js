const jwt = require('jsonwebtoken');
const { User } = require('../models');

const signUp = async (displayName, email, password, image) => {
    try {
        let UserCreated = { displayName, email, password };

        if (image) { 
            UserCreated = { displayName, email, password, image };
        }
    
        await User.create(UserCreated);
    
        const token = jwt.sign(email, process.env.JWT_SECRET, { algorithm: 'HS256' });
        return token;
    } catch (_error) {
        return { message: 'User already registered' };
    }
};

const getUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

module.exports = { signUp, getUsers };