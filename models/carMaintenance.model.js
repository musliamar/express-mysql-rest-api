import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Repair = db.define('Repair', {
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
