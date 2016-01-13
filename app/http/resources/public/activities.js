// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.activities = function(req) {
  return req.store.recordCollection('Activity', {
    queryBy: ['category'],
  });
};

// GET
api.activity = function(req) {
  return req.store.recordItemById('Activity', req.params.id);
};

// POST
api.addActivity = function(req) {
  return req.store.createRecord('Activity');
};

// PUT
api.editActivity = function(req) {
  return req.store.updateRecord('Activity', req.params.id);
};

// DELETE
api.deleteActivity = function(req) {
  return req.store.destroyRecord('Activity', req.params.id);
};

router.get('/activities', api.activities);
router.post('/activities', api.addActivity);

router.route('/activities/:id')
  .get(api.activity)
  .put(api.editActivity)
  .delete(api.deleteActivity);

module.exports = router;
