var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');
var bcrypt = require('bcrypt-nodejs');
var randToken = require('rand-token');

var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})
connection.connect();

router.get('/order', (req, res, next)=>{
	connection.query('SELECT * FROM options', (error, results)=>{
		if (error) throw error;
		res.json(results);
	})
})

router.post('/login', (req, res)=>{
	var username = req.body.username;
	var password = req.body.password;
	var checkLoginQuery = `SELECT * FROM admin
		WHERE username=?`
	connection.query(checkLoginQuery, [username], (error,results)=>{
		if (error) throw error;
		if (results.length === 0){
			res.json({
				msg: 'badUsername'
			})
		}else{
			if (password == results[0].password){
				res.json({
					msg: 'loginSuccess',
					username: results[0].username,
				})
			}else{
				res.json({
					msg: 'wrongPassword'
				})
			} 
		}
	})
})

module.exports = router;