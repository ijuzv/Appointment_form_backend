import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import appointmentRoutes from './routes/appointmentRoutes';
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', appointmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));