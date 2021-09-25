import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import ResponseHandler from '../../utils/responseHandler';

const appValidationForBody = async (
  schema: Joi.ObjectSchema,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (error) {
    ResponseHandler.ErrorResponse(
      res,
      HttpStatus.BAD_REQUEST,
      error.message.replace(/["]/gi, ''),
    );
  }
};
export default appValidationForBody;
