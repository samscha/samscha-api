const configs = [];

if (process.env.NODE_ENV === 'development') {
    configs.push(require('morgan')('combined'));
}

module.exports = configs;
