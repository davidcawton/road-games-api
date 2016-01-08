// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.games = function(req) {
  return req.store.recordCollection('Game');
};

// GET
api.game = function(req) {
  return req.store.recordItemById('Game', req.params.id);
};

// POST
api.addGame = function(req) {
  return req.store.createRecord('Game');
};

// PUT
api.editGame = function(req) {
  return req.store.updateRecord('Game', req.params.id);
};

// DELETE
api.deleteGame = function(req) {
  return req.store.destroyRecord('Game', req.params.id);
};

router.get('/games', api.games);
router.post('/games', api.addGame);

router.route('/games/:id')
  .get(api.game)
  .put(api.editGame)
  .delete(api.deleteGame);

module.exports = router;
