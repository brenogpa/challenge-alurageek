import express from "express";

const app = express();

const loginUsers = [
  { id: 1, user: "teste@teste.com", password: "teste123" },
  { id: 2, user: "teste1@teste.com", password: "123" },
];

app.get('/', (req, res) => {
  res.status(200).send('API funcinando')
})

app.get('/users', (req, res) => {
  res.status(200).json(loginUsers)
})

export default app