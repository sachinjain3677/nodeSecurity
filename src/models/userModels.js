import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: 'Enter a username'
  },

  email: {
    type: String,
    required: 'Enter an email'
  },

  hashPassword: {
    type: String
  },

  created_date: {
    type: Date,
    default: Date.now
  }
});

userSchema.methods.comparePasswords = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
}
