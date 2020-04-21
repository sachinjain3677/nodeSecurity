import {getAllContacts,
        addNewContact,
        deleteContact,
        getContactByID,
        updateContact} from './../controllers/myControllers';

const routes = (app) => {
  app.route('/')
    .get((req, res) => {
      console.log(`Get request on path /`);
    });

  app.route('/contacts')
    .get((req, res, next) => {
      console.log(`Get request on /contacts`);
      next();
    }, getAllContacts)

    .post((req, res, next) => {
      console.log(`POST request on /contacts`);
      next();
    }, addNewContact)

    .delete((req, res, next) => {
      console.log(`DELETE request on /contacts`);
      next();
    }, deleteContact);
}

export default routes;
