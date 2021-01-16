var models = require('../models');

module.exports = {
  get: function(req, res) {
    models.rooms.getAll((err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  post: function(req, res) {
    models.rooms.create(req.body.room_name, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postRoomsUsers: function(req, res) {
    const { userId, roomId } = req.body;

    models.rooms.roomRegistry(userId, roomId, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
};