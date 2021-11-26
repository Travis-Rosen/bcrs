/*
=====================================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date 28 November 2021
; Modified By: Group-2
; Description: Create User model.
; User has one role, many security questions, many invoices.
=====================================================
*/

//Require statements for Mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a variable SecurityQuestions that references the security-question.js file.
const SecurityQuestionsDocument = require('./security-questions');

//Create userSchema.
let userSchema = new Schema({
  //Username and password.
  username: {type: String, unique: true, dropDups: true},
  password: {type: String},
  //User first and last name.
  firstName: {type: String},
  lastName: {type: String},
  //User role.
  role: {type: String},
  //User invoices.
  invoices: {type: Array},
  //securityQuestions referencing the SecurityQuestionDocument.
  securityQuestions: [SecurityQuestionsDocument],
  }, { collection: 'users'})

  //Export the userSchema.
  module.exports = mongoose.model('User', userSchema);
