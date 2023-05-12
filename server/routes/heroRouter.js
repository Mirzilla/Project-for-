const  Router = require('express')
const router = new Router()
const heroController = require('../controllers/heroController')
const checkRole = require('../middleware/checkRoleMiddleware')
router.post('/',checkRole('ADMIN'), heroController.create)
router.get('/', heroController.getAll)
router.get('/:id', heroController.getOne)

module.exports = router