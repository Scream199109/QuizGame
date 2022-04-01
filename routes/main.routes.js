const router = require('express').Router();
const sessionCheck = require('../middlewares/sessionCheck');

router.get('/', (req, res) => {
  res.render('main', { name: req.session.user });
});


// router.route('/example')
//   .get((req, res) => {
//     res.render('example');
//   });

module.exports = router;
