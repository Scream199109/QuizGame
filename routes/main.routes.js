const router = require('express').Router();

// router.route('/')
//   .get((req, res) => {
//     res.render('main');
//   });

router.route('/')
  .get((req, res) => {
    res.render('main');
  });

// router.route('/example')
//   .get((req, res) => {
//     res.render('example');
//   });

module.exports = router;
