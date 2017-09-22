var express = require('express');
var dbutil = require('../util/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);

  var conn = dbutil();
	conn.query('select * from tbuser',
    function(err,rows,fields){
        console.log(rows);
        res.render('users',{data:rows});
       //res.send('mudou qq coisa');

    }
);

  
});


router.get('/insert', function(req, res, next) {
  console.log(req.params);
  res.render('usersinsert');
});



router.post('/save', function(req, res, next) {
  var conn = dbutil();
  if(req.body.id == ''){
    console.log(req.body);
    conn.query('INSERT INTO tbuser (Nome, email) VALUES (?,?)', 
      [req.body.nome, req.body.email], 
      function(err,rows,fields){


        console.log(err);

        res.redirect('/users');});
  }else{
      console.log('update');
      conn.query('UPDATE tbuser SET Nome=?, email=? WHERE id=?',[req.body.nome, req.body.email, req.body.id], 
      function(err,rows,fields){
        res.redirect('/users');
      });
  }

});


router.get('/edit/:id', function(req, res, next) {
  var conn = dbutil();
  conn.query('SELECT id, Nome, email FROM tbuser WHERE id=?', 
      [req.params.id], 
      function(err,rows,fields){
        res.render('/usersinsert');
});});


module.exports = router;
