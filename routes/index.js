var express = require('express');
var router = express.Router();
const connection = require('../sql');
const { rows } = require('mssql');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const database = await connection;
  
  const rows = await database.request().query(`SELECT * FROM products`);
  res.render('index', { title: 'Express', product: rows.recordset[0] });
});

module.exports = router;
