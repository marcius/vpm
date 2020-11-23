// Initializes the `utenti` service on path `/utenti`
const { Utenti } = require('./utenti.class');
const createModel = require('../../models/utenti.model');
const hooks = require('./utenti.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/utenti', new Utenti(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('utenti');

  service.hooks(hooks);
};
