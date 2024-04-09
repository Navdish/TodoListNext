const router = require('express').Router();

router.use('/posts', require('./post'));
router.use('/todo', require('./todo'));

module.exports = router;