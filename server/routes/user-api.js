/*
=====================================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date 28 November 2021
; Modified By: Group-2
; Description: API's for User  CRUD operations.
=====================================================
*/


//Require Statements
const express = require('express')
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

//-----------------------------User API's-----------------------------------------------------//

//findAll
router.get('/users', async(req, res) => {
  try{
    //Query users to find users in which isDisabled is false.
    User.find({ isDisabled : false }, function(err, users) {
      //Log err
      if (err) {
        console.log(err);
        res.status(500).send({
          'message':'Internal server error'
        })
        //Return users and log to console
      } else {
        console.log(users);
        res.json(users);
      }
    })
  } catch (e){
    console.log(e);
    res.status(500).send({
      'message': 'Internal server error'
    })
  }
})

//----------------------------------------------//
//findById
router.get('/users/:id', async(req, res) => {
  try{
    User.findOne({'id': req.params.id}, function(err, user) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal server error'
        })
      } else {
        console.log(user);
        res.json(user);
      }
    })
  } catch(e) {
    console.log(e);
    res.status(500).send({
      'message':'Internal server error'
    })
  }
})

//----------------------------------------------//
//createUser

//saltRounds variable
const saltRounds = 10;

//Post request to create new user.
router.post('/user', async (req, res) => {
  try {
    const hashedPassword = bcypt.hashSync(req.body.password, saltRounds);
    const newUser = {
      username: req.body.username,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address
    };
    await User.create(newUser, function (err, user) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(user);
        res.json(user);

      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
});

//----------------------------------------------//
//updateUser
router.put('/users/:id', async(req,res) => {
  try {
    User.findOne({'id': req.params.id}, function(err, user) {
      if (err){
        console.log(err);
        res.status(500).send({
          'message': 'Internal server error!'
        })
      } else {
        console.log(user);
        //Set user fields.
        user.set({
          userName: req.body.userName,
          password: hashedPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          address: req.body.address,
        });
        //Save the updated user.
        user.save(function(err, updatedUser) {
          if (err) {
            console.log(err);
            res.status(500).send({
              'message': 'Internal server error!'
            })
          } else {
            console.log(updatedUser);
            res.status(200).send({
              'message': 'User Updated!'
            })
          }
        })
      }
    })
  }
  catch (e){
    console.log(e);
    res.status(500).send({
      'message': 'Internal server error!'
    })
  }
})

//----------------------------------------------//
//deleteUser
router.delete('/users/:id', async(req,res) => {
  try{
    User.findOne({'id': req.params.id}, function(err,user){
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal server error'
        })
      } else {
        console.log(user);
        //Set the user isDisabled to true, instead of deleting record.
        user.set({
          isDisabled: true,
        });
        //save the disabledUser
        user.save(function (err, disableUser) {
          if(err) {
            console.log(err)
            res.status(500).send({
              'message': 'Internal server error'
            })
            //successfully disabled the user
          } else {
            console.log(disableUser);
            res.status(200).send({
              'message': 'User has been disabled.'
            })
          }
        })
      }
    })
  }
  catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal server error.'
    })
  }
})



//Export the router
module.exports = router;
