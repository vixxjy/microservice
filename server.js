// setting up serve.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
//calling the dat
const db             = require('./libs/db');

const app            = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})