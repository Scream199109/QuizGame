const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ topic }) {
      card.belongsTo(topic, { foreignKey: 'id_topic' });
    }
  }
  card.init({
    id_topic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'topic',
        key: 'id',
      },
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'card',
  });
  return card;
};
