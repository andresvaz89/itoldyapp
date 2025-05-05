
const express = require('express');
const router = express.Router();
const betCtrl = require('../controllers/betController');

router.post('/', betCtrl.createBet);
router.get('/', betCtrl.getBets);
router.get('/:id', betCtrl.getBet);
router.put('/:id', betCtrl.updateBet);
router.delete('/:id', betCtrl.deleteBet);

module.exports = router;
