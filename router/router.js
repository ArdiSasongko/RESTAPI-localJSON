const express = require("express")
const router = new express.Router();
const method = require("../contoller/method")

router.get('/people', method.getdata)
router.post('/add', method.addData)
router.put('/:id', method.updateData)

module.exports = router