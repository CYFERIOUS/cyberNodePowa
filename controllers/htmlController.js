var bodyParser = require('body-parser');
var path = require('path');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app){
    app.get('/plain',(req, res)=>{
        res.send('<html><head> <link href="data/styles.css" type=text/css rel=stylesheet /></head><body><h1>hello popocho</h1></body></html>');
    });
    
    app.get('/ejs/:id',(req, res)=>{
        res.render('index',{ID: req.params.id, Qstr:req.query.qstr});
    });
    
    app.get('/index',(req, res)=>{
        //res.sendFile(path.resolve('./../build/index.html'));
        res.send('<html><head> <link href="data/styles.css" type=text/css rel=stylesheet /></head><body><h1>hello popocho</h1></body></html>');

    });
    
    app.get('/person/:id',(req, res)=>{
        res.send(`<html><head></head><body><h1>hello popocho${req.params.id}</h1></body></html>`);
    });
    
    
    
    app.get('/',(req, res)=>{
        res.render('index',{ID: req.params.id, Qstr:req.query.qstr});
    });
    
    app.post('/person', urlEncodedParser,(req, res)=>{
        res.send('thank you fothermockers');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
}