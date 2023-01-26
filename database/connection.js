import 'dotenv/config';
import { Sequelize } from 'sequelize';
import mariadb from 'mariadb';

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

export const sequelizeAuth = new Sequelize(database, user, password, { host, dialect: 'mariadb' });

const connection = async () => {
  await dbConnection.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
  console.log('MariaDB: Database created or already exists.');
  await sequelizeAuth.authenticate();
  console.log('Sequelize connection has been established successfully.');
  await sequelizeAuth.sync({ alter: true });
  console.log('All models were synchronized successfully.');
};

export default connection;
