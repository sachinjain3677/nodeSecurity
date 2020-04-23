import {getAllContacts,
        addNewContact,
        deleteContact,
        getContactByID,
        updateContact} from './../controllers/crmControllers';

import {register,
        login,
        loginReq} from './../controllers/userControllers';

const routes = (app) => {
  app.route('/')
    .get((req, res) => {
      console.log(`Get request on path /`);
      res.send(`Works`);
    });

  app.route('/contacts')
    .get((req, res, next) => {
      console.log(`Get request on /contacts`);
      next();
    }, loginReq, getAllContacts)

    .post((req, res, next) => {
      console.log(`POST request on /contacts`);
      next();
    }, loginReq, addNewContact);

  app.route('/contacts/:id')
    .get((req, res, next) => {
      console.log(`GET request on /contacts/:id`);
      next();
    }, loginReq, getContactByID)

    .put((req, res, next) => {
      console.log(`PUT request on /contacts/:id`);
      next();
    }, loginReq, updateContact)

    .delete((req, res, next) => {
      console.log(`DELETE request on /contacts`);
      next();
    }, loginReq, deleteContact);

  app.route('/auth/register')
    .post((req, res, next) => {
      console.log(`POST request on /auth/register`);
      next();
    }, register);

  app.route('/auth/login')
    .post((req, res ,next) => {
      console.log(`POST request on /auth/login`);
      next();
    }, login);
}

export default routes;
