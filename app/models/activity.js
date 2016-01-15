'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  name: { type: String },
  description: { type: String },
  linkUrl: { type: String },
  pictureUrl: { type: String },
  category: { type: String },
  airportCode: { type: String },
  address: { type: String },
  team: { type: ObjectId, ref: 'Team', childPath: 'activities' },
};

var ActivitySchema = new Schema(fields);

ActivitySchema.plugin(relationship, {relationshipPathName: 'team'});

module.exports = mongoose.model('Activity', ActivitySchema);
