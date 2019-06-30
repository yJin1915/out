const express = require('express')
const router = express.Router()
const ctrl = require('../contoller/index')
router.get('/', ctrl.testFn)




module.exports = router