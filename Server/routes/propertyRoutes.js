const express = require('express');
const router = express.Router();

// import Car Controllers
const {createProperty,getProperty, singleProperty}  = require('../controllers/PropertyControllers')

// routes for car
router.post("/newProperty",createProperty)
router.get("/property",getProperty)
router.get("/singleProperty/:_id",singleProperty)

module.exports = router;