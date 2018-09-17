var express = require('express');
var router = express.Router();
var rail = require('../rail');

/* GET home page. */
router.get('/', function(req, res) {
  var requests = [];
  requests.push(rail.findDeparturesTo('PRP', 'BUG'));
  requests.push(rail.findDeparturesTo('BUG', 'PRP'));
  requests.push(rail.findDeparturesTo('BTN', 'BUG'));
  requests.push(rail.findDeparturesTo('BUG', 'BTN'));
  Promise.all(requests).then((results)=>{
    res.render('index', {initialData: results, title: 'Dashboard'});
  });
});

module.exports = router;
