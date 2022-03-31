const fs = require('fs').promises;
const path = require('path');

const pathToDir = path.join(__dirname, '../../cardInfo');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const text = await (fs.readdir(`${pathToDir}`));
    const nameTopics = text.map((el) => el.replace('.txt', ''));
    for (let i = 0; i < nameTopics.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('topics', [{
        topicName: `${nameTopics[i]}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('topics', null, {});
  },
};
