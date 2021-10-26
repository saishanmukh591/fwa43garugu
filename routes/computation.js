var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if ('x' in req.query & req.query.x != ''){
    var x = req.query.x;
  }

  else{
    var x = Math.floor(Math.random()*10000);
  }

  res.render('computation',{
    result:`Math.ceil(${x}) is ${Math.ceil(x)}`
  })
});

module.exports = router;
