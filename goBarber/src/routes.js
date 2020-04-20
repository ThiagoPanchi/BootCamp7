const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: "It's Alive!"});
});

module.exports = routes;