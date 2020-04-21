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

export const deleteContact = (req, res) => {
  contacts.remove({ _id: req.params.id}, (err, contact) => {
    if(err)
      res.send(err);
    res.json({message: `Successfuly deleted ${contact}`});
  });
}

export const getContactByID = (req, res) => {
  contacts.findById(req.params.id, (err, contact) => {
    if(err)
      res.send(err);
    res.json(contact);
  });
}

export const updateContact = (req, res) => {
  contacts.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, useFindAndModify: false}, (err, contact) => {
    if(err)
      res.send(err);
    res.json(contact);
  });
}
