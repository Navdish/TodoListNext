const router = require('express').Router();
const {postController } = require('../controllers');

router.get('/', postController.fetch)
router.post('/', postController.create)
// router.post('/', todoController.create)
// router.put('/:id', todoController.update)
// router.delete('/', todoController.remove)

module.exports = router;