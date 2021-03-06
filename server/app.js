/*
Author: Travis Rosen
Date: 11/21/2021
Title: app.js
Description: server file
*/

/**
 * Require statements
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


/**
 * Routes
 */
const SessionApi = require('./routes/session-api');
const UserApi = require('./routes/user-api')
const SecurityQuestionsApi = require('./routes/security-questions-api')
const RoleApi = require("./routes/role-api");
const InvoiceApi = require("./routes/invoice-api");

/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/bcrs')));
app.use('/', express.static(path.join(__dirname, '../dist/bcrs')));

const port = process.env.PORT || 3000; // server port





// Database Connection String
const conn = 'mongodb+srv://tmrosen:tmrosen@bcrs01.m3xib.mongodb.net/BCRS01?retryWrites=true&w=majority';

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
}); // end mongoose connection

/**
 * API(s) go here...
 */
 app.use('/api/session', SessionApi);
 app.use('/api/users', UserApi);
 app.use('/api/security-questions', SecurityQuestionsApi);
 app.use('/api/roles', RoleApi);
 app.use('/api/invoices', InvoiceApi);


/**
 * Create and start server
 */
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
}); // end http create server function
