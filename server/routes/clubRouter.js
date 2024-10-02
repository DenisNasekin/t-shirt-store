const Router = require('express')
const router = new Router()

const clubController = require('../controllers/clubController')

router.post('/', clubController.create)
router.get('/', clubController.getAll)

module.exports = router