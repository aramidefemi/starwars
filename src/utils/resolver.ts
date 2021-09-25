/* eslint-disable prettier/prettier */
/* eslint-disable */

import { Request, Response } from 'express';
import ResponseHandler from '../utils/responseHandler';

const resolver =
  (action: (req: Request, res: Response) => void) =>
  async (req: Request, res: Response) => {
    try {
      return action(req, res);
    } catch ({ message, code }) {
      return ResponseHandler.ErrorResponse(res, code, message);
    }
  };
export default resolver;
