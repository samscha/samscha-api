module.exports = class {
    constructor(router) {
        this.app = require('express')();
        this.helpers = require('./helpers');
        this.config = require('./config');
        this.router = router;
        this.port = this.helpers.normalizePort();

        this.app.set('port', this.port);
        this.config.forEach(config => this.app.use(config));
        this.app.use('/', this.router.self);
        this.app.use((req, res) => {
            res.sendStatus(404);
        });
    }

    get self() {
        return this.app;
    }
};
