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
const RoleSchema = require('../schemas/user-role')
const BaseResponse = require("../services/base-response");
const ErrorResponse = require("../services/error-response");
//saltRounds variable
const saltRounds = 10;

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
router.get("/:id", async (req, res) => {
  try {
    User.findOne({ _id: req.params.id }, function (err, user) {
      if (err) {
        console.log(err);
        const findByIdMongodbErrorResponse = new ErrorResponse(
          500,
          "Internal server error",
          err
        );
        res.status(500).send(findByIdMongodbErrorResponse.toObject());
      } else {
        console.log(user);
        const findByIdResponse = new BaseResponse(
          200,
          "Query successful",
          user
        );
        res.json(findByIdResponse.toObject());
      }
    });
  } catch (e) {
    console.log(e);
    const findByIdCatchErrorResponse = new ErrorResponse(
      500,
      "Internal server error",
      e
    );
    res.status(500).send(findByIdCatchErrorResponse.toObject());
  }
});

//----------------------------------------------//
//createUser


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
  try {
    User.findOne({'_id': req.params.id}, function(err, user) {
      if (err){
        const updateRoleMongodbErrorResponse = new ErrorResponse("500", "Internal Server Error", err);
         res.status(500).send(updateRoleMongodbErrorResponse.toObject());
      } else {
        console.log(user);
        //Set user fields.
        user.set({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
          email: req.body.email,
        });

                //user role
        user.role.set({
          role: req.body.role
        });
<<<<<<< HEAD
        user.role.set({
          role: req.body.role
        });
=======

>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
        //Save the updated user.
        user.save(function(err, updatedUser) {
          if (err) {
            console.log(err);
            const saveRoleCatchResponse = new ErrorResponse("500", "Internal Server Error", e.message);
            res.status(500).send(saveRoleCatchResponse.toObject());
          } else {
            console.log(updatedUser);
            const saveUserResponse = new BaseResponse("200", "Role Successfully Updated", updatedUser);
             res.json(saveUserResponse.toObject());
          }
        })
      }
    })
  }
  catch (e){
    console.log(e);
    const updateRoleCatchResponse = new ErrorResponse("500", "Internal Server Error", e.message);
     res.status(500).send(updateRoleCatchResponse.toObject());
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


<<<<<<< HEAD


router.get("/:userName/security-questions", async (req, res) => {
=======
/**
 * FindSelectedSecurityQuestions
 */
 router.get("/:userName/security-questions", async (req, res) => {
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
  try {
    User.findOne({ 'userName': req.params.userName}, function(err, user) {
      if (err) {
        console.log(err);
        const findSelectedSelectedSecurityQuestionsMongodbErrorResponse =
          new ErrorResponse("500", "Internal server error", err);
        res.status(500).send(findSelectedSelectedSecurityQuestionsMongodbErrorResponse.toObject());
<<<<<<< HEAD
      } else
=======
      } else 
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
      {
        if (user.selectedSecurityQuestions.length > 0) {
            console.log(user);
            const findSelectedSecurityQuestionsResponse = new BaseResponse('200', 'Query successful', user.selectedSecurityQuestions);
            res.json(findSelectedSecurityQuestionsResponse.toObject());
<<<<<<< HEAD
          }
=======
          } 
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
          else {
            console.log('Account created through the user configuration page and does not have assigned security questions.');
            console.log(user);
            const accountCreatedUsingAdmin = new ErrorResponse(400, `Please contact support to reset.`, null);
            res.status(400).send(accountCreatedUsingAdmin.toObject());
          }
        }
      })
<<<<<<< HEAD
    } catch (e)
=======
    } catch (e) 
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
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


