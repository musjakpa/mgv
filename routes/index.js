const path = require('path');
const express = require('express');
const router = express.Router();

const indexcontroller = require('../controllers');

router.get('/', indexcontroller.getAllProducts);

router.post('/new', indexcontroller.postAllProducts)

module.exports = router;
