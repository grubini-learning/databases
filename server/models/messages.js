// Models contain or represent the data that users work with. The model should only represent the current state of your application. Any control of the applications behavior should be handled by the controller.

var db = require('../db');
// var mysql = require('mysql');

module.exports = {
  getAll: function(callback) {
    // db.connection.query('INSERT INTO rooms (room_name) VALUES (\'lobby\');');
    db.connection.query('SELECT * FROM messages', (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        cbSuccess(null, results);
      }
    });
  }, // a function which produces all the messages

  create: function(params, callback) {
    const { roomId, message, createdAt, userId } = params;
    db.connection.query('INSERT INTO messages(room_id, message, created_at, user_id) VALUES (' + roomId + ',' + '\'' + message + '\'' + ',' + '\'' + createdAt + '\'' + ',' + userId + ');', (error, results) => {
      if (error) {
        console.log('error ', error);
        callback(error, null);
      } else {
        callback(null, { status: "successful" });
      }
    });
  }, // a function which can be used to insert a message into the database

};