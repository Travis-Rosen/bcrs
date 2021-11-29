



//Require statements for Mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let securityQuestionSchema = new Schema({
  text: {type: String},
  isDisabled: {type: Boolean, default: false}
},{collection: 'security-questions'});

module.exports = mongoose.model('Question', securityQuestionSchema);
