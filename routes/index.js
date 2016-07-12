var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ValidatorBuilder' });
});

router.post('/upload', function(req, res, next){
	var file = req.files
	console.log(file);
	console.log(req);
	res.json({'result':1});
});

module.exports = router;
