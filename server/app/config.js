const configs = [];

if (process.env.NODE_ENV === 'development') {
  configs.push(require('morgan')('combined'));
}

configs.push(require('helmet')());

module.exports = configs;
