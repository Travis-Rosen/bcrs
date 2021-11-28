/*
=====================================================
; Title: Bob's Computer Repair Shop
; Author: Professor Krasso
; Date 28 November 2021
; Modified By: Group-2
; Description: API's for User  CRUD operations.
=====================================================
*/

//-----------------------------User API's-----------------------------------------------------//

router = express.Router();

//findAll
router.get('/api/users', async(req, res) => {
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
router.get('/api/users/:id', async(req, res) => {
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
router.post('/api/users', async(req, res) => {
    try {
        let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

        //create variable for newRegisteredUser
        const newRegisteredUser = {
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
                    user.create(newRegisteredUser, function(err, user) {
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

//Export the router
module.exports = router
