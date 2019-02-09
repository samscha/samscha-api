module.exports = router =>
  new class {
    constructor() {
      this.app = require('express')();
      this.helpers = require('./helpers');
      this.config = require('./config');
      this.router = router;
      this.port = this.helpers.normalizePort();

      this.self = this.app;

      this.init();
    }

    init() {
      this.app.set('port', this.port);
      this.config.forEach(config => this.app.use(config));
      this.app.use('/', this.router);
    }
  }(router);
