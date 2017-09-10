const path = require('path');
const morganLogger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const winstonLogger = require('./core/logger')
const express = require('express')
const {scrape} = require('./core/scrape')
const {scrapeByjsdom} = require('./core/jsdom')
const {scrapeByCasper} = require('./core/casper')


const app = express();

app.get('/scrape', scrape)
app.get('/jsdom', scrapeByjsdom)
app.get('/casper', scrapeByCasper)



winstonLogger.configure()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(morganLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


module.exports = app;

