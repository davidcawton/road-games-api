var Mystique = require('mystique');

var ProfileTransformer = Mystique.Transformer.extend({
  resourceName: 'profile',
  mapOut: function(profile) {
    return {
      id: profile.id,
      email: profile.email,
      roles: profile.roles,
      firstName: profile.email,
      lastName: profile.email,
    };
  },

  mapIn(req) {
    return {
    };
  },
});

Mystique.registerTransformer('Profile', ProfileTransformer);
