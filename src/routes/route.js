const express = require('express');
const externalmodule1=require('../logger/logger');

const externalmodule2=require('../validator/formatter')
const externalmodule3=require('../util/helper')
const router = express.Router();

router.get('/test-me',function(req, res) {
      externalmodule1.welcome()
     externalmodule2.trim()
      externalmodule2.changetoLowerCase()
      externalmodule2.changetoUpperCase()
      externalmodule3.printDate() 
      externalmodule3.printMonth()
      module3.getBatchInfo()
      
    res.send('My first ever api!')

});
    //router.get('/test-me1', function(req, res) {
      //res.send('My first last api!')
    
//});

module.exports = router;
// adding this comment for no reason