var Mystique = require('mystique');

var TeamTransformer = Mystique.Transformer.extend({
  resourceName: 'team',
  mapOut: function(team) {
    return {
      id: team.id,
      name: team.name,
      city: team.city,
      established: team.established,
      totalWins: team.totalWins,
      totalLosses: team.totalLosses,
      totalTies: team.totalTies,
      stadiumName: team.stadiumName,
      owner: team.owner,
      coach: team.coach,
      coachRecord: team.coachRecord,
      generalManager: team.generalManager,
      startPlayer: team.startPlayer,
      description: team.description,
      conference: team.conference,
      division: team.division,
      logo: team.logo,
      games: team.awayGames.concat(team.homeGames),
    };
  },

  mapIn(req) {
    return {
      name: req.getJson('team.name'),
      city: req.getJson('team.city'),
      established: req.getJson('team.established'),
      totalWins: req.getJson('team.totalWins'),
      totalLosses: req.getJson('team.totalLosses'),
      totalTies: req.getJson('team.totalTies'),
      stadiumName: req.getJson('team.stadiumName'),
      owner: req.getJson('team.owner'),
      coach: req.getJson('team.coach'),
      coachRecord: req.getJson('team.coachRecord'),
      generalManager: req.getJson('team.generalManager'),
      startPlayer: req.getJson('team.startPlayer'),
      description: req.getJson('team.description'),
      conference: req.getJson('team.conference'),
      division: req.getJson('team.division'),
      logo: req.getJson('team.logo'),
    };
  },
});

Mystique.registerTransformer('Team', TeamTransformer);
