const router = require('express').Router();

router.use('/posts', require('./post.js'));
router.use('/todo', require('./todo'));

module.exports = router;