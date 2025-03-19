import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const appointmentSchema = Joi.object({
  userid: Joi.string(),
  fname: Joi.string().required(),
  lname: Joi.string(),
  password: Joi.string(),
  gender: Joi.string(),
  contact: Joi.string(),
  email: Joi.string(),
  address1: Joi.string(),
  address2: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
  pincode: Joi.string(),
  nationality: Joi.string(),
  history: Joi.string(),
  department: Joi.string(),
  date: Joi.string(),
  time: Joi.string(),
  interest: Joi.string(),
});

export const validateAppointment = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = appointmentSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return; 
  }
  next(); 
};