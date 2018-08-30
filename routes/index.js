const express = require('express');
const router  = express.Router();
const User     = require('../models/user');
const Blog     = require('../models/blog');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
