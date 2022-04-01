/* eslint-disable no-await-in-loop */
const fs = require('fs').promises;
const path = require('path');
const { topic } = require('../models');

const pathToDir = path.join(__dirname, '../../cardinfo');
// // console.log(pathToDir);
// async function x() {
//   const allTopicsDB = await topic.findAll({ raw: true });
//   // console.log(allTopicsDB[0].topicName);
//   const cardsArray = []
//   for (let i = 0; i < allTopicsDB.length; i++) {
//     const dataCards = await fs.readFile(`${pathToDir}/${allTopicsDB[i].topicName}.txt`, 'utf-8');
//     cardsArray.push(dataCards.split('\n').filter((el) => el != ''));
//   }
//   for (let i = 0; i < cardsArray.length; i++) {
//       if (i % 2 === 0) {
//           await queryInterface.bulkInsert('cards', [{
//               id_topic: `${allTopicsDB[i].id}`,
//               answer: `${cardsArray[i + 1]}`,
//               question: `${cardsArray[i]}`,
//               createdAt: new Date(),
//               updatedAt: new Date(),
//             }], {});
//           }
//     }

// }
// x();
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allTopicsDB = await topic.findAll({ raw: true });
    // console.log(allTopicsDB[0].topicName);
    const cardsArray = [];
    for (let i = 0; i < allTopicsDB.length; i++) {
      const dataCards = await fs.readFile(`${pathToDir}/${allTopicsDB[i].topicName}.txt`, 'utf-8');
      cardsArray.push(dataCards.split('\n').filter((el) => el != ''));
    }
    for (let i = 0; i < cardsArray.length; i++) {
      for (let j = 0; j < cardsArray[i].length; j++) {
        if (j % 2 === 0) {
          await queryInterface.bulkInsert('cards', [{
            id_topic: `${allTopicsDB[i].id}`,
            answer: `${cardsArray[i][j + 1]}`,
            question: `${cardsArray[i][j]}`,
            createdAt: new Date(),
            updatedAt: new Date(),
          }], {});
        }
      }
    }
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cards', null, {});
  },
};
