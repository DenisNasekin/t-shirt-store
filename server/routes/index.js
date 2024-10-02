const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const tshitRouter = require('./tshitRouter')
const typeRouter = require('./typeRouter')
const clubRouter = require('./clubRouter')

router.use('/user', userRouter)
router.use('/tshit', tshitRouter)
router.use('/type',typeRouter)
router.use('/club',clubRouter)

module.exports = router