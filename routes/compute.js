var express = require('express');
var router = express.Router();
var x,y;
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.random()*10;
        y=Math.random()*10;
        
        var tanval = Math.tan(x) 
        var sqrtval = Math.sqrt(y);
        
        res.send('\nMath.tan() applied for ' +x +' is ' +tanval+'\n Math.sqrt() applied for number ' +y+' is '+sqrtval);
    }
    else{
        x =req.query.x;
      
        var tanval = Math.tan(x) 
        var sqrtval = Math.sqrt(y) ;
        res.send('\nMath.tan() applied for ' + x +' is ' +tanval+'\n Math.sqrt() applied for number ' +y+' is '+sqrtval);
    }
});
module.exports = router; var tanval = Math.tan(x)