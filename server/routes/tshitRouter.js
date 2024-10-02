const Router = require('express')
const router = new Router()
const tshitController = require('../controllers/tshitController')

router.post('/', tshitController.create)
router.get('/', tshitController.getAll)
router.get('/:id', tshitController.getOne)

module.exports = router