// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};
var mongoose = require('mongoose');
var Game = mongoose.model('Game');

// ALL
api.teams = function(req) {
  return req.store.recordCollection('Team');
};

// GET
api.team = function(req) {
  return req.store.recordItemById('Team', req.params.id);
};

// POST
api.addTeam = function(req) {
  return req.store.createRecord('Team');
};

// PUT
api.editTeam = function(req) {
  return req.store.updateRecord('Team', req.params.id);
};

// DELETE
api.deleteTeam = function(req, res) {
  return req.store.destroyRecord('Team', req.params.id, {
    beforeDelete: function(id, save) {
      Game.remove({
        $or: [
          {homeTeam: id},
          {awayTeam: id},
        ],
      }).exec((err) => {
        if (err) {
          return res.status(500).send(err);
        }

        save();
      });
    },
  });
};

router.get('/teams', api.teams);
router.post('/teams', api.addTeam);

router.route('/teams/:id')
  .get(api.team)
  .put(api.editTeam)
  .delete(api.deleteTeam);

module.exports = router;
