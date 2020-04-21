import mongoose from 'mongoose';
import {contactSchema} from './../models/myModels';

const contacts = mongoose.model('Contact', contactSchema);

export const getAllContacts = (req, res) => {
  contacts.find({}, (err, contact) => {
    if(err)
      res.send(err);
    res.json(contact);
  });
}
