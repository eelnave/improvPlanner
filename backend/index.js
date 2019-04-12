const express = require('express');
const app = express();
const cors = require('cors');

//connect to database
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database("C:\\Users\\EvanPeterson\\WebstormProjects\\ImprovShowPlanner\\backend\\database\\improvPlanner.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Connected to database')
  }
});

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function (req, res) {
  console.log('hey');
});

app.post('/api/players', function (req, res) {
  db.run('INSERT INTO players VALUES (?), (?)', [req.firstName, req.lastName], function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
  });
});

app.get('/api/players', function (req, res) {
  return db.run('SELECT * FROM players', function (err) {
    if (err) {
      return console.error(err.message);
    }
  });
});

module.exports = app;

db.close();
