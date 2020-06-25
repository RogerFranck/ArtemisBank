const { Router } = require('express')
const router = Router();

const Account = require('../models/modelAccounts')
const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
    const token = req.headers['x-jwt'];
    if (!token) {
        return res.json({ auth: false, message: 'No token provided' });
    }
    const decoded = await jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    next();
}

router.post('/', async (req, res) => {
    const user = await Account.findOne({ nip: req.body.usuario })
    if (!user) {
        return res.json({ status: "The user doesn't exists" })
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24
    });
    res.json({ auth: true, token, user });
});

router.get('/validar', verifyToken, async (req, res) => {
    const user = await Account.findById(req.userId, { password: 0 });
    if (!user) {
        return res.json({status:"No user found."});
    }
    res.json(user);
});

module.exports = router;