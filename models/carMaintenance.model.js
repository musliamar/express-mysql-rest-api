import { DataTypes } from 'sequelize';
import sequelizeAuth from '../database/sequelizeAuth.js';

const Repair = sequelizeAuth.define('Repair', {
  descOfRepair: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fromDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  toDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

export default Repair;
