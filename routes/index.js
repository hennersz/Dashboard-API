var express = require('express');
var router = express.Router();
var rail = require('../rail');

/* GET home page. */
router.get('/', function(req, res, next) {
  rail.findServices('PAD', 'RDG', function(services){
    console.log(services);
    res.render('index', {services});
  });
});

module.exports = router;
