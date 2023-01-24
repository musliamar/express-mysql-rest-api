import sequelizeAuth, { createIfNotExists } from './connection.js';

const dbConnection = async () => {
  createIfNotExists();
  await sequelizeAuth.authenticate();
  console.log('Sequelize connection has been established successfully.');
  await sequelizeAuth.sync({ alter: true });
  console.log('All models were synchronized successfully.');
};

export default dbConnection;
