var express = require('express')
var eventRouter = express.Router()
var mongodb = require('mongodb').MongoClient;

eventRouter.route('/')
    .get(function(req,res){

        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url,function(error,db){
            var collection = db.collection('events');
            collection.find({}).toArray(function(error,results){
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
                    events: results
                });
            });

    
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
