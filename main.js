// express 사용 선언
var express = require('express');
var path = require('path');
var app = express();

//jade 사용
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'./public')));

//정리 이쁘게
app.locals.pretty = true;

  app.listen(3000, function() {
    console.log('Connected');
  });


  app.get('/', function(req,res){

    res.render('index.html');

  })

  app.get('/home', function(req,res){

    res.render('home/home.html');
    
  })

  app.get('/search',function(req, res){

    res.render('search/search.html');

  });

  app.get('/favorite', function(req,res){

    res.render('favorite/favorite.html');

  });

  app.get('/document', function(req,res){

    res.render('document/document.html');

  });