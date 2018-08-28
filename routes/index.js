let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/introduce', (req, res, next) => {
  res.render('introduce', { title: 'Introduce' });
});

module.exports = router;