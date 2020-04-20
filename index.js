import express from 'express';
import process from 'process';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
})
