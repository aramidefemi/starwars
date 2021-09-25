import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import appValidationForBody from '../../../helper/validation/app.validation';

export const validateBusinessDetails = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    cacCertificate: Joi.string().label('cac Certificate').required(),
    cacNumber: Joi.string().label('cacNumber').required(),
    dateOfIncorporation: Joi.string().label('dateOfIncorporation').required(),
    natureOfBusiness: Joi.string().label('natureOfBusiness').required(),
    businessSector: Joi.string().label('businessSector'),
    registeredOfficeAddress: Joi.string().label('registeredOfficeAddress'),
    website: Joi.string().label('website'),
    operatingBusinessAddress: Joi.string().label('operatingBusinessAddress'),
    phoneNumber: Joi.string().label('phoneNumber').required(),
    tin: Joi.string().label('tin').required(),
    SCUML: Joi.string().label('SCUML'),
    annualTurnover: Joi.string().label('annualTurnover'),
    bankAccounts: Joi.array().label('bankAccounts'),
    email: Joi.array().label('email'),
  });
  await appValidationForBody(schema, req, res, next);
};
