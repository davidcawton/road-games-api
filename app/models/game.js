'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  date: { type: Date, default: Date.now },
  homeTeam: { type: ObjectId, ref: 'Team', childPath: 'homeGames' },
  awayTeam: { type: ObjectId, ref: 'Team', childPath: 'awayGames' },
  winningTeam: { type: ObjectId, ref: 'Team' },
  homeScore: { type: String },
  awayScore: { type: String },
};

var GameSchema = new Schema(fields);

GameSchema.plugin(relationship, {relationshipPathName: 'homeTeam'});
GameSchema.plugin(relationship, {relationshipPathName: 'awayTeam'});

module.exports = mongoose.model('Game', GameSchema);
