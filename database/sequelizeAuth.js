import 'dotenv/config';
import { Sequelize } from 'sequelize';

const [host, user, password, database] = [
  process.env.MARIADB_HOST,
  process.env.MARIADB_USERNAME,
  process.env.MARIADB_PASSWORD,
  process.env.MARIADB_DATABASE,
];

const sequelizeAuth = new Sequelize(database, user, password, { host, dialect: 'mariadb' });

export default sequelizeAuth;
