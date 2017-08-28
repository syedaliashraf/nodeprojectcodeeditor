var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


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
];

dbRouter.route('/AddEventData')
    .get(function(req,res){
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url,function(error,db){
            var collection = db.collection('events');
            collection.insertMany(eventsData,function(error,results){
                res.send(results);
            })
        });
    });

module.exports = dbRouter;