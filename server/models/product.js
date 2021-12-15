/*
 ; Title:  products.js
 ; Author: Group-2
 ; Date:   12/12/2021
 ; Description: product model
*/


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  category: { type: String},
  image: { type: String}
})

module.exports= mongoose.model('Product', productSchema);

