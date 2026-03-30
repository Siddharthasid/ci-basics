import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const port = process.env.PORT ? process.env.PORT : 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Node js app, with CI basics' });
});

app.get('/learn', (req, res) => {
  res.send('Node js app, with CI basics');
});

app.get('/docker', (req, res) => {
  res.send('Docker is a tool that pachages an application.');
});

app.listen(port, () => {
  console.log(`Node Express app listening on port ${port}`);
});
