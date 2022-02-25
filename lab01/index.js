const express = require('express');
const app = express();

var models = require('./models');
app.get('/sync', function(req, res){
    models.sequelize.sync().then(function() {
        res.send('Database sync completed!');
    });
});


app.set('port', process.env.PORT | 5000);
app.listen(app.get('port'), function(){
    console.log('Server is listening on port '+app.get('port'));
});