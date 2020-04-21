import mongoose from 'mongoose';

export const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  email: {
    type: String
  },
  phone_number: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
