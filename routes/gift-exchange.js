const express = require('express')
const router = express.Router()
const GiftExchangeModel = require('../models/gift-exchange.js')
const { BadRequestError } = require('../utils/errors.js')

router.post('/pairs', function (req, res, next) {
  try{
    const names = req.body.names
    const pairs = GiftExchangeModel.pairs(names)
    res.send({pairs});
  }
  catch{
    next(new BadRequestError())
  }
})

router.post('/traditional', function (req, res) {
  try{
    const names = req.body.names
    const traditional = GiftExchangeModel.traditional(names)

    res.send({traditional});
  }
  catch{
    next(new BadRequestError())
  }
  })

module.exports = router;