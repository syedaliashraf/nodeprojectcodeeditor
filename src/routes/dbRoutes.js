var express = require('express')
var dbRouter = express.Router()

dbRouter.route('/AddEventData')
    .get(function(req,res){
        res.send('add event data route working fine');
    });

module.exports = dbRouter;