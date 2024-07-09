module.exports = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Admin resources access denied' });
    }
    next();
};
