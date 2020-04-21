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

export const addNewContact = (req, res) => {
  const newContact = new contacts(req.body);

  newContact.save((err, contact) => {
    if(err)
      res.send(err);
    res.json(contact);
  });
}
