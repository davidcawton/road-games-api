var Mystique = require('mystique');

var TeamTransformer = Mystique.Transformer.extend({
  resourceName: 'team',
  mapOut: function(team) {
    return {
      id: team.id,
      name: team.name,
      city: team.city,
      description: team.description,
      conference: team.conference,
      division: team.division,
    };
  },

  mapIn(req) {
    return {
      name: req.getJson('team.name'),
      city: req.getJson('team.city'),
      description: req.getJson('team.description'),
      conference: req.getJson('team.conference'),
      division: req.getJson('team.division'),
    };
  },
});

Mystique.registerTransformer('Team', TeamTransformer);
