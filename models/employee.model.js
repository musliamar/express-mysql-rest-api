import { DataTypes } from 'sequelize';
import sequelizeAuth from '../database/sequelizeAuth.js';

const Employee = sequelizeAuth.define('Employee', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Employee;
