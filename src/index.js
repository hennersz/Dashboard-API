const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

//eslint-disable-next-line
app.use((err, req, res, next) => {
  const message = err.expose ? err.message : 'An error occured'; 
  res.status(err.status || 500);
  res.json({ error: message });
});

app.all('/', (req, res) => {
  res.json({message: 'Welcome to the dashboard api'});
});

app.use('/*', (req, res) => {
  res.status(404);
  res.json({error:'Not found'});
});

module.exports = app;