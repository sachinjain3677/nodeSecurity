import express from 'express';
import process from 'process';
import routes from './src/routes/myRoutes';

const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
})
