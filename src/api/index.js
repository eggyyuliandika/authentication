const express = require('express');

const router = express.Router();

const auth = require('./auth/auth.routes');

router.use('/auth', auth);

const users = require('./users/users.routes');

router.use('/users', users);

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

module.exports = router;
