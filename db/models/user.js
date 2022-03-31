const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ userStatistic }) {
      User.hasOne(userStatistic, { foreignKey: 'id_user' });
    }
  }
  User.init({
    userName: DataTypes.TEXT,
    allowNull: false,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
