import dotenv from 'dotenv';
import fs from 'fs';
import logger from './logger';

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

export const ENVIRONMENT = process.env.NODE_ENV;
export const {
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_HOST,
  DATABASE_PORT,
} = process.env;
