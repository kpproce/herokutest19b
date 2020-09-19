var express = require("express");
var router=express.Router();

console.log('page requested')
// router.use(express.static('public'));

router.get("/", function (req, res, next) {
    var fs = require('fs')
    var images = fs.readdirSync('public/images/')
    images.unshift(process.env.NODE_ENV);
    res.send(JSON.stringify(images));
    //res.send('testje');
  }) 


router.get("/images", function (req, res, next) {
  
    var fs = require('fs-extra')
    var images = fs.readdirSync('public/images/')
    var imageObject = new Image()
    console.log('get processed')
    var image = images[0]
    imageObject.src = '/images/' + image
    res.send(image);
    //res.send('testje');
   -- res.send('images page');
}) 

module.exports=router;