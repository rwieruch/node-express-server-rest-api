import 'dotenv/config';
import cors from 'cors';
import uuidv4 from 'uuid/v4';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(cors());

// Postman: x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Postman: raw + JSON (application/json)
app.use(bodyParser.json());

// Sample Data

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
    messageIds: [1],
  },
  2: {
    id: '2',
    username: 'Dave Davids',
    messageIds: [2],
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

// Application-Level Middleware

app.use((req, res, next) => {
  req.me = users[1];
  next();
});

// Routes

app.get('/me', ({ me }, res) => {
  return res.send(users[me.id]);
});

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.post('/messages', ({ body: { text }, me }, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: text,
    userId: me.id,
  };

  messages[id] = message;
  users[me.id].messageIds.push(id);

  return res.send(message);
});

app.delete('/messages/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages;

  if (!message) {
    return res.send(false);
  }

  messages = otherMessages;

  return res.send(true);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
