import mongoose from 'mongoose';

export const contactSchema = new mongoose.Schema({
  firstName: {
    type: string,
    required: 'Enter a first name'
  },
  lastName: {
    type: string,
    required: 'Enter a last name'
  },
  email: {
    type: string
  },
  phone_number: {
    type: string
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
