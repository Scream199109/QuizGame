module.exports = async (req, res, next) => {
  if (await req.session.user) {
    console.log('!!!!!!!!!!!!!!');
    console.log(req.session.user.name);
    res.redirect('/');
  } else {
    next();
  }
};
