import { DataTypes } from 'sequelize';
import { sequelizeAuth } from '../database/connection.js';

const Car = sequelizeAuth.define('Car', {
  chassisNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  yearOfProduction: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  typeOfCar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  typeOfFuel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  firstRegistrationDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

export default Car;
