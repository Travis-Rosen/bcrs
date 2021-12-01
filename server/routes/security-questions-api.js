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
const Question = require('../models/security-question');
const router = express.Router();

//findAll
router.get('/', async(req, res) => {
  try {
    Question.find({ isDisabled: false}, function (err, questions) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(questions);
        res.json(questions);
      }
    })
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
});

//findById
router.get('/:id', async(req, res) => {
  try {
    Question.findOne({'_id': req.params.id}, function(err, question) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(question);
        res.json(question);
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
    const newQuestion = {
      text: req.body.text
    }

    Question.create(newQuestion, function(err, question) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(question);
        res.json(question);
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
    Question.findOne({ '_id': req.params.id }, function (err, question) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(question);
        question.set({
          text: req.body.text
        });
        question.save(function(err, updatedQuestion) {
          if (err) {
            console.log(err);
            res.status(500).send({
              'message': 'Internal Server Error'
            })
          } else {
            console.log(updatedQuestion);
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
