var db = require('../db');

module.exports = {
  getAll: function(callback) {
    var query = 'SELECT * FROM users;';
    db.connection.query(query, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });

  },
  create: function(params, callback) {
    var query = 'INSERT INTO users(username) VALUES (\'' + params + '\');';
    db.connection.query(query, params, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  }
};
