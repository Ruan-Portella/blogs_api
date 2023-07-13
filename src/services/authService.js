const jwt = require('jsonwebtoken');
const { User } = require('../models');

const signIn = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) return { message: 'Invalid fields' };
    const token = jwt.sign(
{ email, id: user.dataValues.id },
         process.env.JWT_SECRET,

{ algorithm: 'HS256' },
);
    return token;
};

module.exports = {
    signIn,
};