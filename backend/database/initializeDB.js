const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./improvPlanner.db');

db.serialize(() => {
  db.get("PRAGMA foreign_keys = ON");
  db.run("CREATE TABLE player(" +
    "id INTEGER PRIMARY KEY NOT NULL," +
    "firstName VARCHAR NOT NULL," +
    "lastName VARCHAR NOT NULL)");

  db.run("CREATE TABLE game(" +
    "id INTEGER PRIMARY KEY NOT NULL," +
    "name VARCHAR NOT NULL," +
    "description VARCHAR NOT NULL," +
    "numberOfPlayers INTEGER NOT NULL)");

  db.run("CREATE TABLE individual_shows(" +
    "id INTEGER PRIMARY KEY NOT NULL," +
    "showDate VARCHAR NOT NULL)");

  db.run("CREATE TABLE show_data(" +
    "show_id INTEGER NOT NULL," +
    "player_id INTEGER NOT NULL," +
    "game_id INTEGER NOT NULL," +
    "FOREIGN KEY (show_id) REFERENCES player(id)" +
    "FOREIGN KEY (player_id) REFERENCES game(id)" +
    "FOREIGN KEY (game_id) REFERENCES individual_shows(id)" +
    ");"
  );
});

db.close();
