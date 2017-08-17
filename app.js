var express = require('express');
var app=express();
var eventRouter = express.Router()


var port = 8080;

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.use(express.static('bower_components'));
app.use('/Events', eventRouter);

app.set('views','./src/views')
app.set('view engine', 'ejs')

var eventsData = [
    {
        name:'event 1',
        description:'first event',
        date:'2016.01.01',
        time:'1.00 pm',
        duration:'1 hr',
        location:{
            streetAddr:'2nd lane',
            city:'hyd',
            state:'telangana',
            zip:'532162',
            lon:0,
            lat:0

        },
        capacity:100
    },
    {
        name:'event 2',
        description:'second event',
        date:'2017.01.01',
        time:'2.00 pm',
        duration:'2 hr',
        location:{
            streetAddr:'3nd lane',
            city:'hyd',
            state:'telangana',
            zip:'532162',
            lon:0,
            lat:0

        },
        capacity:200
    }
]
eventRouter.route('/')
    .get(function(req,res){
    res.render('events',
    {
        list: ['fourth','fifth','sixth'],
        nav: [
            {Link:'Services', Text:'Services'},
            {Link:'Portfolio', Text:'Portfolio'},
            {Link:'About', Text:'About'},
            {Link:'Team', Text:'Team'},
            {Link:'Contact', Text:'Contact'},
            {Link:'Events', Text:'Events'}
        ],
        events: eventsData
}
);
})

eventRouter.route('/eventLevel2')
.get(function(req,res){
res.send('hello eventLevel2');
})

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