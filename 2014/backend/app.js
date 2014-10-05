/**
 * Created by ramos on 04/10/14.
 */
'use strict';

//Modules dependencies
var express  = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    mailer = require('./controller/mailerController');

var constants = require('./utils/Constants');
var _result = {status:{}, date:new Date(), data:[]};

/* App Configuration */
var app = express();
app.set('port', constants.app.port);
app.set('title', constants.app.name);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Include CORS and JSON Type on ALL res's  */
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Content-type', constants.header.json);
    res.removeHeader("X-Powered-By"); //Remove header for safety reasons
    next();
});

app.post('/sendEmail', function(req, res) {
    mailer.sendEmail(req, res);
});

//DEFAULT ROUTE
app.get( '*' , function(req, res) {
    res.writeHead(constants.http.notFound, constants.header.json);
    _result.status = constants.http.notFound;
    res.end(JSON.stringify(_result));
});


http.createServer(app).listen(app.get('port'), function() {
    console.log(app.get('title') + ' listening on port ' + app.get('port'));
});