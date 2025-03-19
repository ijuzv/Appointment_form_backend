import express, { Request, Response } from 'express';
import {
    createAppointment,
    getAppointment,
    getAppointmentbyid,
    updateAppointment,
    deleteAppointment
} from '../controllers/appointmentController';
import { validateAppointment } from '../middlewares/validateAppointment';
import Form from '../models/Appointment';

const router = express.Router();

router.route('/createappointment').post(createAppointment)
router.route('/appointmenthistory').get(getAppointment);
router.route('/appointment/:id').get(getAppointmentbyid).put(validateAppointment, updateAppointment).delete(deleteAppointment);

export default router;