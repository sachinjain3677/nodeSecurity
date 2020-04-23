import express from 'express';
import process from 'process';
import routes from './src/routes/myRoutes';
import mongoose from 'mongoose';


const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/prac_db', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


routes(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
})
