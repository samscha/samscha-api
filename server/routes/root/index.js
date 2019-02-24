const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json('/api');
});

module.exports = router;
