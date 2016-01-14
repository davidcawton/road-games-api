var Mystique = require('mystique');

var GameTransformer = Mystique.Transformer.extend({
  resourceName: 'game',
  mapOut: function(game) {
    console.log(game);
    return {
      id: game.id,
      date: game.date,
      homeTeam: game.homeTeam,
      awayTeam: game.awayTeam,
      winningTeam: game.winningTeam,
      homeScore: game.homeScore,
      awayScore: game.awayScore,
      airport: game.airport,
    };
  },

  mapIn(req) {
    return {
      date: req.getJson('game.date'),
      homeTeam: req.getJson('game.homeTeam'),
      awayTeam: req.getJson('game.awayTeam'),
      winningTeam: req.getJson('game.winningTeam'),
      homeScore: req.getJson('game.homeScore'),
      awayScore: req.getJson('game.awayScore'),
      airport: req.getJson('game.airport'),
    };
  },
});

Mystique.registerTransformer('Game', GameTransformer);
