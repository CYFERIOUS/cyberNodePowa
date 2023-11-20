var express = require('express');

require('dotenv').config();
var app = express();
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');



var port  = process.env.PORT || 5003;

app.set('view engine', 'ejs');

app.use('/data',express.static(__dirname + '/public'));

app.use('/',(req, res, next)=>{
    console.log(`request url ${req.url}`);
    next();
});



htmlController(app);
apiController(app);

app.listen(2709);





