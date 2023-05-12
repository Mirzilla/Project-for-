const  Router = require('express')
const router = new Router()
const heroRouter = require('./heroRouter')
const rarityRouter = require('./rarityRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const modeRouter = require('../routes/modeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/hero',heroRouter)
router.use('/rarity', rarityRouter)
router.use('/mode', modeRouter)

module.exports = router