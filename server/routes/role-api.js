/*
============================================
 ; Title:  role-api.js
 ; Author: Group-2
 ; Date:   07 December 2021
 ; Description: APIs for role configuration - Sprint 3
============================================
*/
<<<<<<< HEAD
=======



>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
/**
 * Require statements
 */

 const express = require('express');
 const Role = require('../models/role');
 const User = require('../models/user');
 const ErrorResponse = require('../services/error-response');
 const BaseResponse = require('../services/base-response');
<<<<<<< HEAD

 const router = express.Router();

=======
 
 const router = express.Router();
 
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
 /**
  * API: FindAllRoles
 */

router.get('/', async(req, res) => {
    try {
         // find all un disabled roles
        Role.find({})
          .where('isDisabled')
          .equals(false)
          .exec(function(err, roles) {
            if (err) {
                console.log(err);
                const findAllRolesMongodbErrorResponse = new ErrorResponse('500', 'internal Server error', err);
                res.status(500).send(findAllRolesMongodbErrorResponse.toObject());
            }
            // if there is no error, will send back the object for base response
            else {
                console.log(roles);
<<<<<<< HEAD
                const findAllRolesResponse = new BaseResponse('200', 'Query successful', roles);
=======
                const findAllRolesResponse = new BaseResponse('200', 'Query successful', roles); 
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
                res.json(findAllRolesResponse.toObject());
            }
        })
    } catch (e) {
        console.log(e);
        const findAllRolesCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);
        res.status(500).send(findAllRolesCatchErrorResponse.toObject());
    }
 });
<<<<<<< HEAD

 /**
  * API: FindById
  */

=======
 
 /**
  * API: FindById
  */
 
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
router.get('/:roleId', async(req, res) => {
    try {
        Role.findOne({ '_id': req.params.roleId }, function(err, role) {
            if (err) {
                console.log(err);
                const findRoleByIdMongodbErrorResponse = new ErrorResponse('500', 'internal Server error', err);
                res.status(500).send(findRoleByIdMongodbErrorResponse.toObject());
            }

            // if there is no error, will send back the object for base response
            else {
                console.log(role);
                const findRoleByIdResponse = new BaseResponse('200', 'Query successful', role);
                res.json(findRoleByIdResponse.toObject());
            }
        })
    } catch (e) {
        console.log(e);
        const findRoleByIdCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);
        res.status(500).send(findRoleByIdCatchErrorResponse.toObject());
    }
});
<<<<<<< HEAD

=======
 
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
 /**
  * API: CreateRole
 */

router.post('/', async(req, res) => {
    try { // Check to make sure the new role doesn't already exist
        Role.findOne({ 'text': req.body.text }, function(err, role) {
            if (err) {
                console.log(err);
                const findRoleMongodbError = new ErrorResponse('500', 'Internal server error', err);
                res.status(500).send(findRoleMongodbError.toObject());
            } else {
                    console.log(role);

                if (!role) { // Create the role if it doesn't exist.
                    const newRole = { text: req.body.text };
                    Role.create(newRole, function(err, role) {
                        if (err) {
                           console.log(err);
                           const createRoleMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
                           res.status(500).status(500).send(createRoleMongodbErrorResponse.toObject());
                        } else {
                            console.log(err);
                            const createRoleResponse = new BaseResponse('200', 'Query successful', role);
                            res.json(createRoleResponse.toObject());
                        }
                    })
                } else {
                    console.log(`Role: ${req.body.text} already exists`);
                    const roleAlreadyExists = new ErrorResponse('400', `Role '${req.body.text}' already exists.`);
                    res.status(400).send(roleAlreadyExists.toObject());
                }
            }
        })
    } catch (e) {
       console.log(e);
       const createRoleCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);
       res.status(500).send(createRoleCatchErrorResponse.toObject());
    }
});
<<<<<<< HEAD

=======
 
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
 /**
  * API: UpdateRole
  */


router.put('/:roleId', async(req, res) => {
    try {
<<<<<<< HEAD

       Role.findOne({'_id': req.params.roleId}, function(err, role) {
           if (err) {

               console.log(err);
               const updateRoleMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
               res.status(500).send(updateRoleMongodbErrorResponse.toObject());

           } else {

               console.log(role);

=======
  
       Role.findOne({'_id': req.params.roleId}, function(err, role) {
           if (err) {
  
               console.log(err);
               const updateRoleMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
               res.status(500).send(updateRoleMongodbErrorResponse.toObject());
  
           } else {
  
               console.log(role);
  
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
               // set the updated role
               role.set({
                   text: req.body.text
               });
<<<<<<< HEAD

               // save the updated role
               role.save(function(err, updatedRole) {

                   if (err) {

                       console.log(err);
                       const updatedRoleMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
                       res.status(500).send(updatedRoleMongodbErrorResponse.toObject());

                   } else {

=======
  
               // save the updated role
               role.save(function(err, updatedRole) {
  
                   if (err) {
  
                       console.log(err);
                       const updatedRoleMongodbErrorResponse = new ErrorResponse('500', 'Internal server error', err);
                       res.status(500).send(updatedRoleMongodbErrorResponse.toObject());
  
                   } else {
  
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
                       console.log(updatedRole);
                       const updatedRoleResponse = new BaseResponse('200', 'Query successful', updatedRole);
                       res.json(updatedRoleResponse.toObject());
                   }
               })
           }
       })
    } catch (e) {
<<<<<<< HEAD

=======
  
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
       console.log(e);
       const updateRoleCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);
       res.status(500).send(updateRoleCatchErrorResponse.toObject());
    }
  });
<<<<<<< HEAD


=======
  
  
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
 /**
 * API: DeleteRole by id
 */

router.delete("/:roleId", async (req, res) => {
    try {
        // Find the role by id
        Role.findOne({ _id: req.params.roleId }, function (err, role) {
            if (err) {
                console.log(err);
                const deleteRoleMongodbErrorResponse = new ErrorResponse("500", "Internal server error", err);
             res.status(500).send(deleteRoleMongodbErrorResponse.toObject());
             // Successful
            } else {
              console.log(role);
              // query to determine if the role being deleted is already assigned to an existing user.
                User.aggregate(
                [
                    {
                        $lookup: {
                            from: "roles",
                            localField: "role.role",
                            foreignField: "text",
                            as: "userRoles",
                        },
                    },
                    {
                        $match: {
                            "userRoles.text": role.text,
                        },
                    },
                ],
                function (err, users) {
                        console.log(users);
                        if (err) {
                            console.log(err);
                            const usersMongodbErrorResponse = new ErrorResponse("500", "Internal server error", err);
                            res.status(500).send(usersMongodbErrorResponse.toObject());
                        } else {
                              // check If the new role is already in use. Then it shouldn't be disabled.
                            if (users.length > 0) {
                                console.log(`Role <${role.text}> is already in use and cannot be deleted`);
                                const userRoleAlreadyInUseResponse = new BaseResponse("400", `Role '${role.text}' is in use.`, role);
                                res.status(400).send(userRoleAlreadyInUseResponse.toObject());
                            } else {
                                console.log(`Role <${role.text}> is not an active role and can be safely removed`);
                                role.set({isDisabled: true,});
                                // save the role
                                role.save(function (err, updatedRole) {
                                    if (err) {
                                        console.log(err);
                                        const updatedRoleMongodbErrorResponse = new ErrorResponse("500", "Internal server error", err);
                                        res.status(500).send(updatedRoleMongodbErrorResponse.toObject());
                                    } else {
                                        console.log(updatedRole);
                                        const roleDeletedResponse = new BaseResponse("200", `Role '${role.text}' has been removed successfully`, updatedRole);
                                        res.json(roleDeletedResponse.toObject());
                                    }
                                });
                            }
                        }
                    }
                );
            }
        });
    } catch (e) {
        console.log(e);
        const deleteRoleCatchErrorResponse = new ErrorResponse("500", "Internal server error", e.message);
        res.status(500).send(deleteRoleCatchErrorResponse.toObject());
    }
});
<<<<<<< HEAD

 module.exports = router;
=======
   
 module.exports = router;
>>>>>>> 908b2b6aa8f32ba8dfc99b2013f2905dec3044a4
