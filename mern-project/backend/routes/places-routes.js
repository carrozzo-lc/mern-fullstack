const express = require('express');

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.post('/', placesControllers.createPlaces);

router.patch('/:pid', placesControllers.updatePlace);

router.delete('/:pid', placesControllers.deleteplace);

module.exports = router;