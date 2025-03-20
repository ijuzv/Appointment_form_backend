import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const getAppointmentbyid = async (req: Request, res: Response) => {
    try {
        const appointment = await Appointment.findOne({email: req.params.id});
        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: "Appointment not found" });
        }
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const updateAppointment = async (req: Request, res: Response) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (appointment) {
            await appointment.deleteOne();
            res.status(200).json({ message: 'Appointment deleted' });
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};
