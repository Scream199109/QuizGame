const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class userStatistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      userStatistic.belongsTo(User, { foreignKey: 'id_user' });
    }
  }
  userStatistic.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    id_topic: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cardCoin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'userStatistic',
  });
  return userStatistic;
};
