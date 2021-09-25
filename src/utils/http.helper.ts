import axios, { AxiosRequestConfig } from 'axios';
import * as secrets from '../config/secrets';
import logger from '../config/logger';

const Http = {
  async get(url: string) {
    try {
      return await axios.get(url);
    } catch (error) {
      logger.error(error);
      return error;
    }
  },
  async post(url: string, data: any, headers?: any) {
    try {
      const options: AxiosRequestConfig = {
        method: 'POST',
        headers,
        data,
        url,
      };
      return await axios.request(options);
    } catch (error) {
      logger.error(error);
      return error;
    }
  },
};
export default Http;
