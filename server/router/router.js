module.exports = class {
  constructor(routes) {
    this.router = require('express').Router();
    this.routes = routes;

    this.router.route('/').get((req, res) => {
      res.json('root');
    });
    this.routes.forEach(route => this.router.use('/api', route));
  }

  get self() {
    return this.router;
  }
};
