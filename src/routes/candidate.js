const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

router.post('/add', auth, admin, candidateController.addCandidate);
router.post('/vote', auth, candidateController.voteCandidate);

module.exports = router;
