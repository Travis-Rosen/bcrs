/*
=====================================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date 28 November 2021
; Modified By: Group-2
; Description: API's for User  CRUD operations.
=====================================================
*/
// Require statements
const bcrypt = require('bcryptjs');
const express = require('express');
const User = require('../../models/user');


// Configurations
const router = express.Router();
//-----------------------------User API's-----------------------------------------------------//

//findAll
router.get('/', async(req, res) => {
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
router.get('/:_id', async(req, res) => {
  try{
    //find user by Id
    User.findOne({'_id': req.params._id}, function(err, user) {
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
router.post('/', async(req, res) => {
    try {
        let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

        //create variable for newRegisteredUser
        const newRegisteredUser = {
            id: req.body.id,
            userName: req.body.userName,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            address: req.body.address,
        }

        User.findOne({'userName': req.body.userName}, function(err,user){
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message' : `MongoDB Exception : ${err}`
                })
            } else {
                if(!user){
                  //Create new user. Will return err or newRegistered user.
                    User.create(newRegisteredUser, function(err, user) {
                        if (err) {
                            console.log(err);
                            res.status(501).send({
                                'message': `MongoDB Exception: ${err}`
                            })
                        } else {
                            console.log(user);
                            res.status(200).send({
                                'message': `Registered User`
                            })
                        }
                    })
                    //Error if userName already exists.
                } else {
                    console.log(err);
                    res.status(401).send({
                        'message': 'Username is already in use'
                    })
                }
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e.message}`
        })
    }
})

//----------------------------------------------//
//updateUser
router.put('/:_id', async(req,res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

  try {
    User.findOne({'_id': req.params._id}, function(err, user) {
      if (err){
        console.log(err);
        res.status(500).send({
          'message': 'Internal server error!'
        })
      } else {
        console.log(user);
        //Set user fields.
        user.set({
          id: req.body.id,
          userName: req.body.userName,
          password: hashedPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          address: req.body.address,
          isDisabled: req.body.isDisabled,
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
router.delete('/:_id', async(req,res) => {
  try{
    User.findOne({'_id': req.params._id}, function(err,user){
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
module.exports = router
