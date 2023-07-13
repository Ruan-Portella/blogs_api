const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
        try {
                const { authorization } = req.headers;
                const token = authorization.split(' ')[1];
         
                if (!authorization) { 
                 return res.status(401).json({ message: 'Token not found' }); 
                }
                const user = await jwt.verify(token, process.env.JWT_SECRET);
                req.user = user.id;
                return next();  
        } catch (error) {
                return res.status(401).json({ message: 'Expired or invalid token' }); 
        }
};

module.exports = validateToken;