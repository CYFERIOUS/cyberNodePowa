var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app){
    app.get('/api/person/:id',(req, res)=>{
        console.log('get json from data base')
        res.json({popo:'ok', chichi:'ok'});
    });
    
    
    app.post('/api/person', jsonParser,(req, res)=>{
        console.log('saving to data base');
    });
    
    app.delete('/api/person:id', jsonParser,(req, res)=>{
        console.log('delete in data base');
    });
}

