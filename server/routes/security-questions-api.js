/*
=====================================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date 28 November 2021
; Modified By: Group-2
; Description: API's for User  CRUD operations.
=====================================================
*/

const express = require('express')
const SecurityQuestion = require('../models/security-question');
const router = express.Router();
const ErrorResponse = require('../services/error-response');
const BaseResponse = require('../services/base-response');


/**
 * FindAll API
 */

router.get('/', async(req, res) => {
  try {
    SecurityQuestion.find({}).where('isDisabled').equals(false).exec(function(err, securityQuestions) {
      if (err) {
        console.log(err);
        const findAllMongodbErrorResponse = new ErrorResponse(500, 'Internal server error', err);
        res.status(500).send(findAllMongodbErrorResponse.toObject());
      }
       else {
        console.log(securityQuestions)
        const findAllResponse = new BaseResponse(200, 'Query successful', securityQuestions);
        res.json(findAllResponse.toObject());
      }
    })
  } catch (e) {
    console.log(e);
    const findAllCatchErrorResponse = new ErrorResponse(500, 'Internal server error', e.message);
    res.status(500).send(findAllCatchErrorResponse.toObject());
  } 
});



//findById
router.get('/:id', async(req, res) => {
  try {
    SecurityQuestion.findOne({'_id': req.params.id}, function(err, securityQuestion) {
      if (err) {
        console.log(err);
        const findByIdMongodbErrorResponse = new ErrorResponse(500, 'Internal server error', err);
        res.status(500).send(findByIdMongodbErrorResponse.toObject());
      } 
      else {
        console.log(securityQuestion);
        const findByIdResponse = new BaseResponse(200, 'Query successful', securityQuestion);
        res.json(findByIdResponse.toObject());
     }
    })
  } catch (e){
    console.log(e);
    const findByIdCatchErrorResponse = new ErrorResponse(500, 'Internal server error', e.message);
    res.status(500).send(findByIdCatchErrorResponse.toObject());
  }
})

//createSecurityQuestion
router.post('/', async (req, res) => {
  try {
    const newSecurityQuestion = {
      text: req.body.text
    }

    SecurityQuestion.create(newSecurityQuestion, function(err, securityQuestion) {
      if (err) {
        console.log(err);
        const createSecurityQuestionMongodbErrorResponse =  new ErrorResponse(500, 'Internal Server Error', err);
        res.status(500).send(createSecurityQuestionMongodbErrorResponse.toObject());
      } else {
        console.log(securityQuestion);
        const createSecurityQuestionResponse = new BaseResponse(200, 'Query Successful', securityQuestion);
        res.json(createSecurityQuestionResponse.toObject());
      }
    })
  } catch (e) {
    console.log(e);
    const createSecurityQuestionCatchErrorResponse = new ErrorResponse(500, 'Internal Server Error', e.message);
    res.status(500).send(createSecurityQuestionCatchErrorResponse.toObject());
  }
});

//updateSecurityQuestions
router.put('/:id', async(req, res) => {
  try {
    SecurityQuestion.findOne({ '_id': req.params.id }, function (err, securityQuestion) {
      if (err) {
        console.log(err);
        const updateSecurityQuestionMongodbErrorResponse = new ErrorResponse(500, 'Internal server error', err);
        res.status(500).send(updateSecurityQuestionMongodbErrorResponse.toObject());
      } else {
        console.log(securityQuestion);
        securityQuestion.set({
          text: req.body.text
        });
        securityQuestion.save(function(err, updatedSecurityQuestion) {
          if (err) {
            console.log(err);
            const savedSecurityQuestionMongodbErrorResponse = new ErrorResponse(500, 'Internal server error', err);
            res.status(500).send(savedSecurityQuestionMongodbErrorResponse.toObject());
          } else {
            console.log(updatedSecurityQuestion);
            const updateSecurityQuestionResponse = new BaseResponse(200, 'Query successful', updatedSecurityQuestion);
            res.json(updateSecurityQuestionResponse.toObject());
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    const updateSecurityQuestionCatchErrorResponse = new ErrorResponse(500, 'Internal server error', e.message);
    res.status(500).send(updateSecurityQuestionCatchErrorResponse.toObject());
  }
});

//deleteSecurityQuestions
router.delete('/:id', async(req, res) => {
  try {
    SecurityQuestion.findOne({ '_id': req.params.id }, function (err, securityQuestion) {
      if (err) {
        console.log(err);
        const deleteSecurityQuestionMongodbErrorResponse = new ErrorResponse(500, 'Internal server error', err);
        res.status(500).send(deleteSecurityQuestionMongodbErrorResponse.toObject());
      } else {
        console.log(securityQuestion);
        securityQuestion.set({
          isDisabled: true
        });
        securityQuestion.save(function(err, updatedSecurityQuestion) {
          if (err) {
            console.log(err);
            const savedSecurityQuestionMongodbErrorResponse = ErrorResponse(500, 'Internal server error', err);
            res.status(500).send(savedSecurityQuestionMongodbErrorResponse.toObject());
          } else {
            console.log(updatedSecurityQuestion);
            const deleteSecurityQuestionResponse = new BaseResponse(200, 'Query successful', updatedSecurityQuestion);
            res.json(deleteSecurityQuestionResponse.toObject());
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    const deleteSecurityQuestionCatchErrorResponse = new ErrorResponse(500, 'Internal server error', e.message);
    res.status(500).send(deleteSecurityQuestionCatchErrorResponse.toObject());
  }
})

module.exports = router;
