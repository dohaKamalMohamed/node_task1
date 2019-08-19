const express=require('express');
      bodyParser=require('body-parser');
      cors=require('cors');
      path=require('path');
      students=require('../routes/students');
module.exports=function(app){
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.static(path.join(__dirname,'dist/fron-end')));
    app.use('/',express.static(path.join(__dirname,'dist/fron-end')));  
    app.use('/students',students); 
}      