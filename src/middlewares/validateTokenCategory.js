const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
        try {
                const { authorization } = req.headers;
         
                if (!authorization) { 
                 return res.status(401).json({ message: 'Token not found' }); 
                }

                await jwt.verify(authorization, process.env.JWT_SECRET);
                return next();  
        } catch (error) {
                return res.status(401).json({ message: 'Expired or invalid token' }); 
        }
};

module.exports = validateToken;