import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

app.get('/users', (req, res) => {
  res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  res.send(users[req.params.userId]);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
