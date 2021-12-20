<<<<<<< HEAD

 /*
=======
/*
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
 ; Title:  line-item.js
 ; Author: Group-2
 ; Date:   13 December 2021
 ; Description: Creates schema for each line item for invoice
*/

//Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
<<<<<<< HEAD
  name: {type: String},
=======
  title: {type: String},
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
  price: {type: Number}
})

module.exports = lineItemSchema;
