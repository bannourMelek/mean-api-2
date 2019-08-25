var express = require('express');
var router = express.Router();

var platController = require('../controller/plats');

router.get('/get', platController.getAllPlats);

router.post('/add', platController.AddPlat);

module.exports = router;