'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {...this.get(), id: undefined}
    }
  }
  todo.init({
    content:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    }}, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};