const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/introduce', (req, res, next) => {
  res.render('introduce', { title: 'Introduce' });
});

router.get('/members', (req, res, next) => {
  res.render('members', { title: 'Members' });
});

router.get('/notice', (req, res, next) => {
  res.render('notice', { title: 'Notice' });
});

router.get('/video', (req, res, next) => {
  res.render('video', { title: 'Video' });
});

module.exports = router;