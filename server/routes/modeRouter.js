const  Router = require('express')
const router = new Router()
const modeController = require('../controllers/modeController')
const checkRole = require('../middleware/checkRoleMiddleware')
const heroController = require("../controllers/heroController");

router.post('/',checkRole('ADMIN'), modeController.create)
router.get('/', modeController.getAll)
router.get('/:id', modeController.getOne)

module.exports = router