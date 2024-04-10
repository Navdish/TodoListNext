'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({todo}) {
      // define association here
      this.belongsTo(todo, {foreignKey:'todoId', targetKey:"id"})
    }
  }
  post.init({
    body:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};