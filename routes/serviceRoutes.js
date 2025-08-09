const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/', serviceController.index);
router.post('/', serviceController.store);
router.put('/:id', serviceController.update);
router.delete('/:id', serviceController.destroy);

module.exports = router;
