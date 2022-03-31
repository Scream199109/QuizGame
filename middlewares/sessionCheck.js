const sessionCheck = (req, res, next) => {
  if (req.session.user) {
    console.log('Сессия есть');
    res.locals.id = req.session.user.id;
    res.locals.name = req.session.user.name;
    next();
  } else {
    next();
  }
};

module.exports = sessionCheck;
