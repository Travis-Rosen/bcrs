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
const User = require('../models/user');
const RoleSchema = require('../schemas/user-role');
const ErrorResponse = require('../services/error-response');
const BaseResponse = require('../services/base-response');

// Configurations
const router = express.Router();
//-----------------------------User API's-----------------------------------------------------//

//findAll
router.get('/', async (req,res) => {
  try {
    User.find({}).where('isDisabled').equals(false).exec(function(err, users) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal Server Error'
        })
      } else {
        console.log(users);
        res.json(users);
      }
    })
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
});



//----------------------------------------------//
//findById
router.get('/:id', async(req, res) => {
  try{
    //find user by Id
    User.findOne({'_id': req.params.id}, function(err, user) {
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
});

//----------------------------------------------//
//createUser

//saltRounds variable
const saltRounds = 10;

//Post request to create new user.
router.post('/', async(req, res) => {
  try {
    let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
    standardRole = {
      role: 'standard'
    }

    let newUser = {
      userName: req.body.userName,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      email: req.body.email,
      role: standardRole
    };

    User.create(newUser, function (err, user) {
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
  } catch (e) {
    console.log(e);
    res.status(500).send({
      'message': 'Internal Server Error'
    })
  }
});

//----------------------------------------------//
//updateUser
router.put('/:id', async(req,res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

  try {
    User.findOne({'_id': req.params.id}, function(err, user) {
      if (err){
        console.log(err);
        res.status(500).send({
          'message': 'Internal server error!'
        })
      } else {
        console.log(user);
        //Set user fields.
        user.set({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          address: req.body.address,
        });
        user.role.set({
          role: req.body.role
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
});

//----------------------------------------------//
//deleteUser
router.delete('/:id', async(req,res) => {
  try{
    User.findOne({'_id': req.params.id}, function(err,user){
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
});




router.get("/:userName/security-questions", async (req, res) => {
  try {
    User.findOne({ 'userName': req.params.userName}, function(err, user) {
      if (err) {
        console.log(err);
        const findSelectedSelectedSecurityQuestionsMongodbErrorResponse =
          new ErrorResponse("500", "Internal server error", err);
        res.status(500).send(findSelectedSelectedSecurityQuestionsMongodbErrorResponse.toObject());
      } else
      {
        if (user.selectedSecurityQuestions.length > 0) {
            console.log(user);
            const findSelectedSecurityQuestionsResponse = new BaseResponse('200', 'Query successful', user.selectedSecurityQuestions);
            res.json(findSelectedSecurityQuestionsResponse.toObject());
          }
          else {
            console.log('Account created through the user configuration page and does not have assigned security questions.');
            console.log(user);
            const accountCreatedUsingAdmin = new ErrorResponse(400, `Please contact support to reset.`, null);
            res.status(400).send(accountCreatedUsingAdmin.toObject());
          }
        }
      })
    } catch (e)
    {
    console.log(e);
    const findSelectedSecurityQuestionsCatchErrorResponse = new ErrorResponse("500","Internal server error", e);
    res.status(500).send(findSelectedSecurityQuestionsCatchErrorResponse.toObject());
  }
});

/**
 * findUserRole
 */

router.get('/:userName/role', async (req, res) => {
   try
   {
     User.findOne({'userName': req.params.userName}, function(err, user)
     {
       if (err)
       {
         console.log(err);
         const findUserRoleMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
         res.status(500).send(findUserRoleMongodbErrorResponse.toObject());
       }
       else
       {
         console.log(user);
         const findUserRoleResponse = new BaseResponse('200', 'Query successful', user.role);
         res.json(findUserRoleResponse.toObject());
       }
     })
   }
   catch(e)
   {
     console.log(e);
     const findUserRoleCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);
     res.status(500).send(findUserRoleCatchErrorResponse.toObject());
   }
})



//Export the router
module.exports = router


