const express = require('express')
var path = require('path');
var compression = require('compression');  // voor productie
var helmet = require('helmet');  // voor productie

var app = express();
app.use(helmet());

process.env.NODE_ENV = 'production';  // voor productie

app.use(compression()); //Compress all routes  TBV productie

const readImgNamesRouter = require("./routes/readImgNames"); //

/* app.get('/', (req, res) => {
  res.send('Hello World root')
});

app.get('/images', (req, res) => {
    res.send('Hello World images')
  });
   */
  
  app.use(express.static(__dirname + '/public'));
  app.use('/',readImgNamesRouter);

app.listen(8000, () => {

  console.log('Example app listening on port 8000!')
  if(process.env.NODE_ENV === 'production') {
    console.log('production')
} else {
  console.log('Development ')
}

});

// const readImageNames = require ('./routes/readImgNames');

module.exports = app;
