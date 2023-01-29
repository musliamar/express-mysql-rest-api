import mariadb from 'mariadb';
import Car from '../models/car.model.js';
import Client from '../models/client.model.js';
import Repair from '../models/carMaintenance.model.js';
import Rental from '../models/carRental.model.js';
import sequelizeAuth from './sequelizeAuth.js';

Client.hasMany(Car, {
  foreignKey: 'currentlyRentedToClientId',
  allowNull: true,
  defaultValue: null,
});

Client.hasMany(Rental, {
  foreignKey: 'rentedToClientId',
});

Car.hasMany(Repair, {
  foreignKey: 'idOfRepairedCar',
});

Car.hasMany(Rental, {
  foreignKey: 'idOfRentedCar',
});

const [host, port, user, password, database] = [
  process.env.MARIADB_HOST,
  process.env.MARIADB_PORT,
  process.env.MARIADB_USERNAME,
  process.env.MARIADB_PASSWORD,
  process.env.MARIADB_DATABASE,
];

const dbConnection = await mariadb.createConnection({
  host, port, user, password,
});

const connection = async () => {
  await dbConnection.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
  console.log('MariaDB: Database created or already exists.');
  await sequelizeAuth.authenticate();
  console.log('Sequelize connection has been established successfully.');
  await sequelizeAuth.sync({ alter: true });
  console.log('All models were synchronized successfully.');
};

export default connection;
