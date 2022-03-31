const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ userStatistic, card }) {
      topic.hasMany(card, { foreignKey: 'id_topic' });
    }
  }
  topic.init({
    topicName: DataTypes.TEXT,
    allowNull: false,
  }, {
    sequelize,
    modelName: 'topic',
  });
  return topic;
};
