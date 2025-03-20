import express, { Request, Response } from 'express';
import {
    createAppointment,
    getAppointment,
    getAppointmentbyid,
    updateAppointment,
    deleteAppointment
} from '../controllers/appointmentController';

const router = express.Router();

router.post('/createappointment', createAppointment);
router.get('/appointmenthistory', getAppointment);
router.get('/appointment/:id', getAppointmentbyid);
router.put('/appointment/:id', updateAppointment);
router.delete('/appointment/:id', deleteAppointment);

export default router;