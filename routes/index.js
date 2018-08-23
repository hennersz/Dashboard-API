var express = require('express');
var router = express.Router();
var rail = require('../rail');

/* GET home page. */
router.get('/', function(req, res) {
  rail.findDeparturesTo('PAD', 'RDG').then((result)=>{
    res.render('index', {services:result.services});
  });
});

module.exports = router;
