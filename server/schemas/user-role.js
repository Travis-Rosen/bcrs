/*
 ; Title:  user-role.js
 ; Author: Group-2
 ; Date:   29 November 2021
 ; Description: User Role Schema
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the user role schema
let userRoleSchema = new Schema({
  role: { type: String, default: "standard" },
});

module.exports = userRoleSchema;
