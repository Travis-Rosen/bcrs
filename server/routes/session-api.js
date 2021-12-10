/*
 ; Title:  session-api.js
 ; Author: Group-2
 ; Date:   27 November 2021
 ; Description: APIs for managing session Users.
*/

// Require statements
 const express = require('express');
 const User = require('../models/user');
 const bcrypt = require("bcryptjs");
 const ErrorResponse = require('../services/error-response');
 const BaseResponse = require('../services/base-response');


 // Configurations
 const router = express.Router();
 const saltRounds = 10; //default salt rounds for password hashing


 /**
  * API: User SignIn
  * sprint 1
 **/

 router.post('/signin', async(req, res) => {
     try {
         User.findOne({ 'userName': req.body.userName }, function(err, user) {
             if (err) {
                 console.log(err);
                 const signinMongodbErrorResponse = new ErrorResponse(500, 'Internal server error', err);
                 res.status(500).send(signinMongodbErrorResponse.toObject());
             } else {
                 console.log(user);

                 // if the username is valid
                 if (user) {
                     let passwordIsValid = bcrypt.compareSync(req.body.password, user.password); // compare the saved hashed password

                    // Send 200 response & BaseResponse: 'Login Successful'
                     if (passwordIsValid) {
                         console.log(`Login successful`);
                         const signinResponse = new BaseResponse(200, 'Login successful', user);
                         res.json(signinResponse.toObject());
                     }
                     else {
                      //If the password is invalid return 401
                       console.log(`Invalid password for username: ${user.userName}`);
                       const invalidPasswordResponse = new BaseResponse(401, "Invalid user name and/or password, please try again", null);
                       res.status(401).send(invalidPasswordResponse.toObject());
                   }
                 }

                 // if the username is invalid
                 else {
                     console.log(`Username: ${req.body.userName} is invalid`);
                     const invalidUserNameResponse = new BaseResponse(401, 'Invalid username and/or password, please try again', null);
                     //res.status(400).send(invalidUserNameResponse.toObject());
                     res.status(401).send(invalidUserNameResponse.toObject());
                    }
             }
         })
     } catch (e) {
         console.log(e);
        // Send 500 response & ErrorResponse: 'Internal Server Error'
         const signinCatchErrorResponse = new ErrorResponse(500, 'Internal server error', e.message);
         res.status(500).send(signinCatchErrorResponse.toObject());
     }

 });

 /**
 * Sprint 2
 * API:  Register
 **/

router.post('/register', async(req, res) => {
    try {
        User.findOne({ 'userName': req.body.userName }, function(err, user)

            {
                if (err) {
                    console.log(err);
                    const registerUserMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
                    res.status(500).send(registerUserMongodbErrorResponse.toObject());

                } else {
                    if (!user) {

                        let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds); // salt/hash the password
                        standardRole = {
                            role: "standard",
                        }

                        // user object
                        let registeredUser = {
                            userName: req.body.userName,
                            password: hashedPassword,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            phoneNumber: req.body.phoneNumber,
                            address: req.body.address,
                            email: req.body.email,
                            role: standardRole,
                            selectedSecurityQuestions: req.body.selectedSecurityQuestions
                        };

                        User.create(registeredUser, function(err, newUser)

                            {
                                if (err) {
                                    console.log(err);
                                    const newUserMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
                                    res.status(500).send(newUserMongodbErrorResponse.toObject());
                                } else {

                                    console.log(newUser);
                                    const registeredUserResponse = new BaseResponse('200', 'Registration successful', newUser);
                                    res.json(registeredUserResponse.toObject());
                                }
                            })
                    } else {
                        console.log(`Username ${req.body.userName} already exists.`);
                        const userExistsError = new BaseResponse('400', `The username '${req.body.userName}' is already in use.`, null);
                        res.status(400).send(userExistsError.toObject());
                    }
                }
            })
    } catch (e) {
        console.log(e);
        const registerUserCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);
        res.status(500).send(registerUserCatchErrorResponse.toObject());
    }
});

/**
 * Sprint 2
 * API: Verify User
 */
router.get('/verify/users/:userName', async(req, res) => {
    try {
        User.findOne({'userName': req.params.userName }, function(err, user) {

            if (user) {
                if (err)
                {
                  console.log(err);
                  const verifyUserMongodbErrorResponse = new ErrorResponse('500', "Internal server error", err );
                  res.status(500).send(verifyUserMongodbErrorResponse.toObject());
                }
               else {
                 console.log(user);
                 const verifyUserResponse = new BaseResponse('200', 'User verification successful', user);
                 res.json(verifyUserResponse.toObject());
               }
              } else {
                     const invalidUsernameResponse = new BaseResponse('400,', "Invalid username", req.params.userName);
                   res.status(400).send(invalidUsernameResponse.toObject());
                    }
                    })
            }
    catch (e) {
        console.log(e);
        const verifyUserCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);
        res.status(500).send(verifyUserCatchErrorResponse.toObject());
    }
});
 module.exports = router;

//verifySecurityQuestions
router.post('/verify/users/:userName/security-questions', async(req, res) => {
  try {
    User.findOne({'userName': req.params.userName}, function(err, user) {
      if (err) {
        console.log(err);
        const verifySecurityQuestionMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err);
        resizeTo.status(500).send(verifySecurityQuestionMongoDbErrorResponse.toObject());
      } else {
        console.log(user);
        const selectedSecurityQuestionOne = user.selectedSecurityQuestions.find(q => q.questionText === req.body.questionText1);
        const selectedSecurityQuestionTwo = user.selectedSecurityQuestions.find(q => q.questionText === req.body.questionText2);
        const selectedSecurityQuestionThree = user.selectedSecurityQuestions.find(q => q.questionText === req.body.questionText3);

        const isValidAnswerOne = selectedSecurityQuestionOne.answerText === req.body.answerText1;
        const isValidAnswerTwo = selectedSecurityQuestionTwo.answerText === req.body.answerText2;
        const isValidAnswerThree = selectedSecurityQuestionThree.answerText === req.body.answerText3;

        if (isValidAnswerOne && isValidAnswerTwo && isValidAnswerThree) {
          console.log(`User ${user.userName} answered their security questions correctly`);
          const validSecurityQuestionResponse = new BaseResponse('200', 'success', user);
          res.json(validSecurityQuestionResponse.toObject());
        } else {
          console.log(`User ${user.userName} did not answer the security questions correctly`);
          const invalidSecurityQuestionResponse = new BaseResponse('200', 'error', user);
          res.json(invalidSecurityQuestionResponse.toObject());

        }
      }
    })
  } catch (e) {
    console.log(e);
    const verifySecurityQuestionCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error', e.message);
    res.status(500).send(verifySecurityQuestionCatchErrorResponse.toObject());
  }
});

//resetPassword
router.post('/users/:/userName/reset-password', async(req, res) => {
  try {
    const password = req.body.password;
    User.findOne({'userName': req.params.userName}, function(err, user) {
      if (err) {
        console.log(err);
        const resetPasswordMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err);
        res.status(500).send(resetPasswordMongoDbErrorResponse.toObject());
      } else {
        console.log(user);
        let hashedPassword = bcrypt.hashSync(password, saltRounds);
        user.set({
          password: hashedPassword
        });
        user.save(function(err, updatedUser) {
          if (err) {
            console.log(err);
            const updatedUserMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err);
            res.status(500).send(updatedUserMongoDbErrorResponse.toObject());
          } else {
            console.log(updatedUser);
            const updatedPasswordResponse = new BaseResponse('200', 'Update Successful', updatedUser);
            res.json(updatedPasswordResponse.toObject());
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    const resetPasswordCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error', e);
    res.status(500).send(resetPasswordCatchErrorResponse.toObject());
  }
});


