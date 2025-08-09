const express = require('express');
const router = express.Router();
const benefitController = require('../controllers/benefitController');

router.get('/', benefitController.index);
router.post('/', benefitController.store);
router.put('/:id', benefitController.update);
router.delete('/:id', benefitController.destroy);

module.exports = router;
