const router = require('express').Router();

[require('./root'), require('./users')].forEach(route =>
  router.use('/', route),
);

module.exports = router;
