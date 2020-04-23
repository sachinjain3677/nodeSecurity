import express from 'express';
import process from 'process';
import routes from './src/routes/myRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/prac_db', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err) => {
  if(err)
    console.log(`Connection error`);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routes(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
})
