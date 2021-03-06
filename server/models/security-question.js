/*
 ; Title:  securityQuestionModel.js
 ; Author: Group-2
 ; Date:   27 November 2021
 ; Description: Security Question Model
*/

//Require statements for Mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Creating model for security question
let securityQuestionSchema = new Schema({
  text: { type: String },
  isDisabled: { type: Boolean, default: false }
},{collection: 'security-questions'});

module.exports = mongoose.model('SecurityQuestion', securityQuestionSchema);

