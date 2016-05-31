var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/ad.html', function(req, res, next) {
  res.render('ad', {});
});

router.get('/adsaf.html', function(req, res, next) {
  res.render('adsaf', {});
});

router.get('/daolu.html', function(req, res, next) {
  res.render('daolu', {});
});

router.get('/gfhasf.html', function(req, res, next) {
  res.render('gfhasf', {});
});

router.get('/hunningtu.html', function(req, res, next) {
  res.render('hunningtu', {});
});

router.get('/index.html', function(req, res, next) {
  res.render('index', {});
});

router.get('/knowstost.html', function(req, res, next) {
  res.render('knowstost', {});
});

router.get('/mail.html', function(req, res, next) {
  res.render('mail', {});
});

router.get('/newscenter.html', function(req, res, next) {
  res.render('newscenter', {});
});

router.get('/peitao.html', function(req, res, next) {
  res.render('peitao', {});
});

router.get('/qwe.html', function(req, res, next) {
  res.render('qwe', {});
});

router.get('/tuitu.html', function(req, res, next) {
  res.render('tuitu', {});
});

router.get('/walktost.html', function(req, res, next) {
  res.render('walktost', {});
});

router.get('/xiaofang.html', function(req, res, next) {
  res.render('xiaofang', {});
});

router.get('/zhuangzaiji.html', function(req, res, next) {
  res.render('zhuangzaiji', {});
});

module.exports = router;
