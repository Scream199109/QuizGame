const router = require('express').Router();

const sessionCheck = require('../middlewares/sessionCheck');

const { topic, card } = require('../db/models');
// let id2 = 0;

router.route('/')
  .get((req, res) => {
    res.render('main', { name: req.session.user });
  });
router.get('/slider', async (req, res) => {
  const topicsObj = await topic.findAll({ raw: true });
  console.log(topicsObj);
  res.render('slider', { topicsObj });
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cardObj = await card.findAll({
    raw: true,
    attributes: ['question', 'answer'],
    where: {
      id_topic: `${id}`,
    },
  });
  console.log(cardObj)
  // res.send(cardObj);
  res.render('card', { cardObj });

module.exports = router;
