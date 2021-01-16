// Controllers process incoming requests, perform operations on the model, and select views to render to the user.

var models = require('../models');

module.exports = {
  get: function(req, res) {
    models.messages.get((error, results) => {
      if (error) {
        res.status(400).send();
      } else {
        res.status(200).json(results);
      }
    });

  }, // a function which handles a get request for all messages


  post: function(req, res) {
    models.messages.create(req.body, (error, results) => {
      if (error) {
        res.status(400).send();
      } else {
        res.status(201).send(results);
      }
    });

  } // a function which handles posting a message to the database
};