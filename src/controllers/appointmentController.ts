import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

export const createAppointment = async (req: Request, res: Response) => {
    const { userid, fname, lname, password, gender, contact, email, 
      address1, address2, city, state, pincode, Nationality, history, 
      department, date, time, interest } = req.body;
  
    try {
      const appointment = await Appointment.create({ userid, fname, lname, password, gender, contact, email, 
        address1, address2, city, state, pincode, Nationality, history, 
        department, date, time, interest });
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };


export const getAppointment = async (req: Request, res: Response) => {
      const appointment = await Appointment.find();
      res.status(200).json(appointment);
    };

export const getAppointmentbyid = async (req: Request, res: Response) => {
    const appointment = await Appointment.findById(req.params.id);
    if (appointment) {
        res.status(200).json(appointment)
    } else {
        res.status(404).json({ message: 'Appointment not found'});
    }
    };

export const updateAppointment = async (req: Request, res: Response) => {
    const appointment = await Appointment.findById(req.params.id)
    if (appointment) {
        appointment.fname = req.body.fname || appointment.fname
        appointment.lname = req.body.lname || appointment.lname
        appointment.password = req.body.password || appointment.password
        appointment.gender = req.body.gender || appointment.gender
        appointment.contact = req.body.contact || appointment.contact
        appointment.email = req.body.email || appointment.email
        appointment.address1 = req.body.address1 || appointment.address1
        appointment.address2 = req.body.address2 || appointment.address2
        appointment.city = req.body.city || appointment.city
        appointment.state = req.body.state || appointment.state
        appointment.pincode = req.body.pincode || appointment.pincode
        appointment.nationality = req.body.nationality || appointment.nationality
        appointment.history = req.body.history || appointment.history
        appointment.department = req.body.department || appointment.department
        appointment.date = req.body.date || appointment.date
        appointment.time = req.body.time || appointment.time
        appointment.interest = req.body.interest || appointment.interest
    }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  const appointment = await Appointment.findById(req.params.id);
  if (appointment) {
    await appointment.deleteOne();
    res.status(200).json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

