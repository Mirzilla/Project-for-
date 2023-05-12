const  Router = require('express')
const router = new Router()
const rarityController = require('../controllers/rarityController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), rarityController.create)
router.get('/', rarityController.getAll)

module.exports = router