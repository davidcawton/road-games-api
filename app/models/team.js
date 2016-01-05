'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  name: { type: String },
  city: { type: String },
  description: { type: String },
  conference: { type: String },
  division: { type: String },
};

var TeamSchema = new Schema(fields);

module.exports = mongoose.model('Team', TeamSchema);
