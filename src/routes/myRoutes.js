const routes = (app) => {
  app.route('/')
    .get((req, res) => {
      console.log(`Get request on path /`);
    })
}

export default routes;
