var express = require('express')
var eventRouter = express.Router()

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
    });
});

eventRouter.route('/:id')
.get(function(req,res){
    var id = req.params.id;
    
    res.render('event',{
        list: ['event 1','event 2','event 3'],
        nav: [
            {Link:'Services', Text:'Services'},
            {Link:'Portfolio', Text:'Portfolio'},
            {Link:'About', Text:'About'},
            {Link:'Team', Text:'Team'},
            {Link:'Contact', Text:'Contact'},
            {Link:'Events', Text:'Events'}
        ],
        events: eventsData[id]
    });
});

module.exports = eventRouter;
