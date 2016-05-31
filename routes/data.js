var express = require('express');
var router = express.Router();

var dataDao = require('../dao/dataInfoDao.js');

router.post('/tuitu', function(req, res, next) {
  dataDao.searchTuitu(req, res, next);
});

module.exports = router;