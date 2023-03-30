var express = require('express');
var router = express.Router();
var x,y;
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.random()*10;
        //y=Math.random()*10;
        
        var tanval = Math.tan(x) 
        var sqrtval = Math.sqrt(x);
        var cos = Math.acosh(x);
        var logl = Math.log1p(x);
        
        res.send('\nMath.tan() applied for ' +x +' is ' +tanval+'\n Math.sqrt() applied for number ' +x+' is '+sqrtval+ ' Math.tan() applied for ' +x +' is ' +cos+' Math.tan() applied for ' +x +' is ' +logl);
    }
    else{
        x =req.query.x;
      
        var tanval = Math.tan(x) 
        var sqrtval = Math.sqrt(y) ;
        var cos = Math.acosh(x);
        var logl = Math.log1p();
        res.send('\nMath.tan() applied for ' +x +' is ' +tanval+'\n Math.sqrt() applied for number ' +x+' is '+sqrtval+ '\nMath.tan() applied for ' +x +' is ' +cos+ '\nMath.tan() applied for ' +x +' is ' +logl);
    }
});
module.exports = router; var tanval = Math.tan(x)