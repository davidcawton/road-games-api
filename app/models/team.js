'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  name: { type: String },
  city: { type: String },
  established: { type: Number },
  totalWins: { type: Number },
  totalLosses: { type: Number },
  totalTies: { type: Number },
  stadiumName: { type: String },
  owner: { type: String },
  coach: { type: String },
  coachRecord: { type: Number },
  generalManager: { type: String },
  startPlayer: { type: String },
  description: { type: String },
  conference: { type: String },
  division: { type: String },
  awayGames: [{ type: ObjectId, ref: 'Game' }],
  homeGames: [{ type: ObjectId, ref: 'Game' }],
};

var TeamSchema = new Schema(fields);

module.exports = mongoose.model('Team', TeamSchema);
