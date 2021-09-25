/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import HttpStatus from 'http-status-codes';
import CustomError from './customeError';

export default class ResponseHandler {
  static ErrorResponse(res: Response, statusCode: number, message = '') {
    return res.status(statusCode).json({ message, status: false });
  }

  static existsOrError = (
    data: any,
    message: string,
    code = HttpStatus.NOT_FOUND,
  ) => {
    if (!data) {
      throw new CustomError(message, code);
    }
  };

  static SuccessResponse(
    res: Response,
    statusCode: number,
    message = '',
    data: any,
  ) {
    return res.status(statusCode).json({ message, status: true, data });
  }

  static ServerErrorResponse(res: Response) {
    return res
      .status(500)
      .json({ message: 'Internal Server Error', status: false });
  }
}
