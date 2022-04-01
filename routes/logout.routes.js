const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    req.session.destroy(); // удалить сессию
    res.redirect('/login');
  });

module.exports = router;
