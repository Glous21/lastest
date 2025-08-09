const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');

router.get('/', testimonialController.index);
router.post('/', testimonialController.store);
router.put('/:id', testimonialController.update);
router.delete('/:id', testimonialController.destroy);

module.exports = router;
