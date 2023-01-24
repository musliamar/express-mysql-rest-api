import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Rental = db.define('Rental', {
  fromDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  toDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  mileageAtBeginning: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  mileageAtEnd: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  costPerDay: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Rental;
