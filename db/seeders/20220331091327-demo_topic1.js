const fs = require('fs').promises;
const path = require('path');

const pathToDir = path.join(__dirname, '../../cardInfo');
// async function x() {
//   const text = await (fs.readFile(`${pathToDir}/topic1.txt`, 'utf-8'));
//   const textToArr = text.split('\n').filter((elem) => elem !== '');
//   console.log('🚀 ~ up: ~ textToArr', textToArr);
// }
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const text = await (fs.readFile(`${pathToDir}/topic1.txt`, 'utf-8'));
    const textToArr = text.split('\n').filter((elem) => elem !== '');
    for (let i = 0; i < textToArr.length; i++) {
      if (i % 2 === 0) {
        await queryInterface.bulkInsert('cards', [{
          id_topic: 1,
          answer: `${textToArr[i + 1]}`,
          question: `${textToArr[i]}`,
          createdAt: new Date(),
          updatedAt: new Date(),
        }], {});
      }
    }
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cards', null, {});
  },
};

// x();

// map((elem, index) => {
//   if (index % 2 === 0) {
//     queryInterface.bulkInsert('cards', [{
//       answer: `${elem}`,
//       question: 'sdsdasd',
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }], {})
//   }
// })
