import express from 'express';

const app = express();

app.get('/express', (request, response) => {
  const users = [
    "Joaquim"
  ];
  return response.json(users);
})

app.listen(3333);