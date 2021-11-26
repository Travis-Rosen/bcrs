/*
=====================================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date 28 November 2021
; Modified By: Group-2
; Description: Create security-question model.
; A security question can have one answer
=====================================================
*/

//Require statements for Mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create itemSchema with text string.
let securityQuestionSchema = new Schema({
  question: {type: String},
});

//Export module itemSchema(export as a module).
module.exports = securityQuestionSchema;
