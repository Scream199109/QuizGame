const router = require('express').Router();
const bcrypt = require('bcrypt');
const sessionCheck = require('../middlewares/sessionCheck');
const { User } = require('../db/models');

router.route('/')
  .get(sessionCheck, (req, res) => {
    res.render('registration');
  });

router.route('/')
  .post(sessionCheck, async (req, res) => {
    const {
      name, email, password,
    } = req.body;
    const user = await User.findOne({ where: { userEmail: email } });
    if (!user) {
      const createdUser = await User.create({
        userName: name,
        userEmail: email,
        userPass: await bcrypt.hash(password, 10),

      }, { raw: true });
      // console.log(res);
      req.session.user = createdUser;
      console.log(req.session);
      res.sendStatus(200);
    }

    // res.sendStatus(400);
  });

module.exports = router;
