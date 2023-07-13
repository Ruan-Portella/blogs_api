const validateCategoryName = (req, res, next) => {
    if (!req.body.name) return res.status(400).json({ message: '"name" is required' });
    next();
};

module.exports = validateCategoryName;