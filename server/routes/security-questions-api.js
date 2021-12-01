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



router.get('/', async(req, res) => {
  try {
    SecurityQuestion.find({}).where('isDisabled').equals(false).exec(function(err, securityQuestions) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(securityQuestions)
        res.json(securityQuestions);
      }
    })
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
})

/*
//findAll
router.get('/', async(req, res) => {
  try {
    SecurityQuestion.find({ isDisabled: false}, function (err, securityQuestions) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(securityQuestions);
        res.json(securityQuestions);
      }
    })
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
});
*/

//findById
router.get('/:id', async(req, res) => {
  try {
    SecurityQuestion.findOne({'_id': req.params.id}, function(err, securityQuestion) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(securityQuestion);
        res.json(securityQuestion);
      }
    })

  } catch (e){
    console.log(e);
    res.status(500).send({
      'message': 'Internal server error'
    })
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
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(securityQuestion);
        res.json(securityQuestion);
      }
    })
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
})

//updateSecurityQuestions
router.put('/:id', async(req, res) => {
  try {
    SecurityQuestion.findOne({ '_id': req.params.id }, function (err, securityQuestion) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(securityQuestion);
        securityQuestion.set({
          text: req.body.text
        });
        securityQuestion.save(function(err, updatedSecurityQuestion) {
          if (err) {
            console.log(err);
            res.status(500).send({
              'message': 'Internal Server Error'
            })
          } else {
            console.log(updatedSecurityQuestion);
            res.json(updatedSecurityQuestion)
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
})

//deleteSecurityQuestions
router.delete('/:id', async(req, res) => {
  try {
    Question.findOne({ '_id': req.params.id }, function (err, question) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(question);
        question.set({
          isDisabled: true
        });
        question.save(function(err, disabledQuestion) {
          if (err) {
            console.log(err);
            res.status(500).send({
              'message': 'Internal Server Error'
            })
          } else {
            console.log(disabledQuestion);
            res.json(updatedQuestion)
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
})

module.exports = router;
