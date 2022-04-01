const router = require('express').Router();
const path = require('path');

const pathtoDir = path.join(__dirname, '../db/models');
const { topic, card } = require(`${pathtoDir}`);

router.route('/')
  .get((req, res) => {
    res.render('main');
  });

router.get('/show', async (req, res) => {
  const response = await topic.findAll({ raw: true });
  // const result = await response.text();
  res.send(response);
});
router.get('/showOne', async (req, res) => {
  const response = await card.findAll({
    raw: true,
    where: {
      id_topic: 7,
    },
  });
  res.send(response);
});

module.exports = router;
