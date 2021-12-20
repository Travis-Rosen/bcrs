/*
 ; Title:  invoice.js
 ; Author: Group-2
 ; Date:   13 December 2021
 ; Description: Invoice Model
*/

//Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemDocument = require('../schemas/line-item')

const invoiceSchema = new Schema({
<<<<<<< HEAD
  //New invoices with userName, line Items Array, parts, labor, total, and date.
  userName: {type: String},
  lineItems: [lineItemDocument],
  partsAmount: {type: Number},
  laborHours: {type: Number},
=======
  //New invoices with username, line Items Array, parts, labor, total, and date.
  userName: {type: String},
  lineItem: [lineItemDocument],
  partsAmount: {type: Number},
  laborAmount: {type: Number},
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
  lineItemTotal: {type: Number},
  total: {type: Number},
  oderDate: {type: Date, default: new Date()}
})

//Export statement
module.exports = mongoose.model('Invoice', invoiceSchema);
