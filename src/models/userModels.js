import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export const userSchema = mongoose.Schema({
  username: {
    type: string,
    required: 'Enter a username'
  },

  email: {
    type: string,
    required: 'Enter an email'
  },

  hashPassword: {
    type: string
  },

  created_date: {
    type: Date,
    default: Date.now
  }
});

userSchema.methods.comparePasswords = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
}
