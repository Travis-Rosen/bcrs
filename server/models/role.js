/*
 ; Title:  role.js
 ; Author: Group-2
 ; Date:   30 November 2021
 ; Description: Role Model
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    text: {type: String, unique: true},
    isDisabled: {type: Boolean, default: false}
})

module.exports= mongoose.model('Role', roleSchema);
