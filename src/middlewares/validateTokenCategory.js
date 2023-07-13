const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
        try {
                const { authorization } = req.headers;

                if (authorization.split(' ')[1]) {
                        const token = authorization.split(' ')[1];
                        const user = await jwt.verify(token, process.env.JWT_SECRET);
                        req.user = user.id;
                        return next();
                }   

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