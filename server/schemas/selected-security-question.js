/*
 ; Title:  selected-security-question.js
 ; Author: Group-2
 ; Date:   29 November 2021
 ; Description: Selected Security Question Schema
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let selectedSecurityQuestionSchema = new Schema({
  questionText: { type: String },
  answerText: { type: String },
});
// Export the Schema
module.exports = selectedSecurityQuestionSchema;
