const router = require('express').Router();

[require('./root'), require('./users')].forEach(route =>
  router.use('/api', route),
);

module.exports = router;
