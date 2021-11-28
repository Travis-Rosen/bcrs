/*
 ; Title:  base-response.js
 ; Author: Group-2
 ; Date:   27 November 2021
 ; Description: base response to get a response back to the requestor.
*/

 //BaseResponse class with httpcode, message and data attributes.
class BaseResponse{
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
//Export the BaseResponse.
  module.exports = BaseResponse;