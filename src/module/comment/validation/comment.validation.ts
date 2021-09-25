import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import appValidationForBody from '../../../helper/validation/app.validation';

export const validateComment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    comment: Joi.string().label('comment').required(),
  });
  await appValidationForBody(schema, req, res, next);
};
