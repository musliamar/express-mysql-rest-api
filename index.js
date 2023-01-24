import express from 'express';
import cors from 'cors';
import dbConnection from './database/sync.js';

const app = express();
const port = process.env.EXPRESS_PORT;

app.get('/', (req, res) => {
  res.send('This Rent-a-car backend works!');
});

app.listen(port, () => {
  console.log(`Rent-a-car backend app listening on port ${port}`);
});

dbConnection();

app.use(cors());
app.use(express.json());
