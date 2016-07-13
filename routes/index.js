var express = require('express');
var router = express.Router();
var multer = require('multer');
var XLSX = require('xlsx');

var upload = multer({
	dest: './uploads/',
	inMemory: true
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ValidatorBuilder' });
});

router.post('/upload', upload.single('excelFile'), function(req, res, next){
	const workbook = XLSX.readFile(req.file.path);
	// 获取 Excel 中所有表名
	const sheetNames = workbook.SheetNames; // 返回 ['sheet1', 'sheet2']
	// 根据表名获取对应某张表
	const worksheet = workbook.Sheets[sheetNames[0]];
	var result = XLSX.utils.sheet_to_json(worksheet);
	var xmlContent = '';

	for (i in result) {
		xmlContent += "<field = '"+result[i]['字段']+"' description='"+result[i]['字段名称']+"' >\n"
	}

	console.log(result);
	console.log(xmlContent)
	
	res.json({'result':xmlContent});
});

module.exports = router;
