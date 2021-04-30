const express = require('express')
const {checkToken} = require('./../verify-token')
const controller = require('./../controllers/home')
const router = express.Router()

router.get("/", controller.index)

router.get("/home", checkToken, controller.home)

router.get("/landingpage", controller.landing)

module.exports= router