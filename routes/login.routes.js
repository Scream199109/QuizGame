const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const sessionCheck = require('../middlewares/sessionCheck');


router.route('/')
  .get((req, res) => {
    res.render('login');
  });

router.route('/')
  .post(sessionCheck, async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { userEmail: email }, raw: true });
    console.log(user);
    if (user) {
      const passwords = await bcrypt.compare(password, user.userPass);
      if (passwords) {
        console.log(user.id);
        req.session.user = user.userName;
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    } else {
      res.sendStatus(400);
    }
  });
module.exports = router;
