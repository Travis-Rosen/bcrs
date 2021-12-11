/*
 ; Title:  line-item.js
 ; Author: Group-2
 ; Date:   13 December 2021
 ; Description: Creates schema for each line item for invoice
*/

//Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
  title: {type: String},
  price: {type: Number}
})

module.exports = lineItemSchema;
