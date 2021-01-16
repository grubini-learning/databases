var models = require('../models');

module.exports = {
  get: function(req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(results);
      }
    });
  },


  post: function(req, res) {
    models.users.create(req.body.username, (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(201).send({ "status": "successful" });
    });
  }
};
