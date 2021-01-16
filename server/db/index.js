var mysql = require('mysql');
var rooms = require('../models/rooms');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// module.exports = {
//   databaseConnection: mysql.createConnection({
//     user: 'root',
//     password: 'password',
//     database: 'chat'
//   })
// };


module.exports.connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'chat'
});

module.exports.connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connected');

  }
}); // TODO: fill this out


/* Empty the db table before each test so that multiple tests
 * (or repeated runs of the tests) won't screw each other up: */