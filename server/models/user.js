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
const UserRoleSchema = require("../schemas/user-role");
const SelectedSecurityQuestionSchema = require("../schemas/selected-security-question");

//Create userSchema.
let userSchema = new Schema({
  //Username and password.
  username: {type: String, unique: true, dropDups: true},
  password: {type: String, required: true},
  //User details.
  firstName: {type: String},
  lastName: {type: String},
  phoneNumber: {type: String},
  email: {type: String},
  address: {type: String},
  isDisabled: {type: Boolean, default: false},
  //User role.
  role: UserRoleSchema,
  //selectedSecurityQuestions referencing the SelectedSecurityQuestionSchema.
  selectedSecurityQuestions: [SelectedSecurityQuestionSchema],

  date_created: {type: Date, default: new Date()},
  date_modified: {type: Date},
  }, { collection: 'users'})

  //Export the userSchema.
  module.exports = mongoose.model('User', userSchema);
