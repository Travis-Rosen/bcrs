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
const SecurityQuestionsDocument = require('../models/security-question');

//Create userSchema.
let userSchema = new Schema({
  id: {type: Number},
  //Username and password.
  username: {type: String, unique: true, dropDups: true},
  password: {type: String},
  //User details.
  firstName: {type: String},
  lastName: {type: String},
  phoneNumber: {type: String},
  email: {type: String},
  address: {type: String},
  isDisabled: {type: Boolean, default: false},
  //User role.
  role: {type: String},
  //User invoices.
  invoices: {type: Array},
  //securityQuestions referencing the SecurityQuestionDocument.
  securityQuestions: [SecurityQuestionsDocument],
  }, { collection: 'users'})

  //Export the userSchema.
  module.exports = mongoose.model('User', userSchema);
