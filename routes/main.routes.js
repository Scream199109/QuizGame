const router = require('express').Router();
const sessionCheck = require('../middlewares/sessionCheck');

router.get('/', (req, res) => {
  res.render('main', { name: req.session.user });
});

module.exports = router;
