import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    user_id: { type: String, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    nationality: { type: String },
    history: { type: String },
    department: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    interest: { type: String }
});

const Appointment = mongoose.model('appointments', formSchema);

export default Appointment;
