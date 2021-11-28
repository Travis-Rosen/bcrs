/*
 ; Title:  error-response.js
 ; Author: Group-2
 ; Date:   27 November 2021
 ; Description: error response back an error occur in processing */

 //ErrorResponse class with httpcode, message and data attributes.
 class ErrorResponse{
    constructor(httpCode, message, data){
      this.httpCode = httpCode;
      this.message = message;
      this.data = data;
    }
      toObject(){  //return object literal with those fields
        return {
          'httpCode': this.httpCode,
          'message': this.message,
          'data': this.data,
          'timestamp': new Date().toLocaleDateString()
        }
      }
  }
  //Export the ErrorResponse.
  module.exports = ErrorResponse;