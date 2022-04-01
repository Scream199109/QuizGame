module.exports = (req, res, next) => {
  if (req.session) {
    console.log(req.session)
    console.log('!!!!!!!!!!!!!!');
  } else {
    next();
  }
};
