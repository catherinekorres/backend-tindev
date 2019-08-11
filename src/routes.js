const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: `Ola ${req.query.name}`});
});

module.exports = routes;