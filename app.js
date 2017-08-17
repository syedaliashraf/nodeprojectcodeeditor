var express = require('express');
var app=express();
var eventRouter = require('./src/routes/eventRoutes');


var port = 8080;

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.use(express.static('bower_components'));
app.use('/Events',eventRouter);

app.set('views','./src/views')
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    //res.send('hello world!!!');
    res.render('index',{
        list:['1st','2nd','3rd'],
        nav:[
            {Link:'Services', Text:'Services'},
            {Link:'Portfolio', Text:'Portfolio'},
            {Link:'About', Text:'About'},
            {Link:'Team', Text:'Team'},
            {Link:'Contact', Text:'Contact'},
            {Link:'Events', Text:'Events'}
        ]
})
});

app.get('/routing', function(req, res){
    res.send('hello world to routing!!!');
});

app.listen(port,function(err){
console.log('the server is running on port: ' + port);
});