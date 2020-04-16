const express = require('express');

const server = express();

const users = ['user01', 'user02', 'user03', 'user04']

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
})

server.listen(3000);