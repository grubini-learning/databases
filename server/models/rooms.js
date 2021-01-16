var db = require('../db');

module.exports = {
  getAll: function(callback) {
    db.connection.query('SELECT * FROM rooms', (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },
  create: function(name, callback) {
    db.connection.query('INSERT INTO rooms(room_name) VALUES (\'' + name + '\');', (error, results, fields) => {
      if (error) {
        console.log('hey my error, ', error);
        callback(error, null);
      } else {
        console.log('We did it yeah created room!');
        callback(null, { status: "successful" });
      }
    });
  },
  roomRegistry: function(userId, roomId, callback) {
    db.connection.query('INSERT INTO rooms_users(user_id, room_id) VALUES (' + userId + ',' + roomId + ');', (error, results, fields) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, { status: "successful" });
      }
    });
  }
};

