import { Sequelize } from 'sequelize';
import {
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_HOST,
} from '../secrets';

export const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: 'mysql',
  },
);

sequelize.authenticate();
