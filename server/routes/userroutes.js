const router = require('express').Router();
const User = require('../models/usermodels');
const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken")
const { check, validationResult } = require('express-validator')


// posting to endpoint https:\\localhost400/register



// router.post('/validate',(req,res) => {
//   // console.log(req.headers)
//   let userToken = req.headers['authorization']

//   if(userToken){
// JWT.verify(userToken,'kjhkhkhj',(error, decoded) => {
//   if(error){
//     console.log(error)
//   }else{
//     res.status(200).json({
//       message:'token is valid',
//       data:decoded
//     })
//   }
  
// })
//   }else{
//     res.status(500).json({
//       message:'please provide authentication value'
//     })
//   }
// })

router.post('/login', (req, res) => {
  User.findOne({
    where:{
      email:req.body.email
    }
  }).then((user) => {
    // console.log(user)
    // checks if email matches database email
    if(user){
      // checking if password matches the password and email you made
if(bcrypt.compareSync(req.body.password , user.password)){

let userToken = JWT.sign({
        email:user.email,
        id:user.id
      },"kjhkhkhj",{
        expiresIn:900000,
        audience:'site-users'
      })

res.status(200).json({
  message:'user logged in successfully',
  token:userToken
})

}else{
  res.status(500).json({
    message:'password didnt match'
  })
}
    }else{
      res.status(500).json({
    message:'user doesnt exist with this email'
  })

    }
  }).catch((err) => 
  console.log(err))
})

router.post('/register',
[
  check("email",'provide valid email')
  .isEmail(),
  check("password",'provide password longer than 5 characters')
  .isLength({
    min:6
  })
]
,async (req, res) => {
  
 const errors = validationResult(req)
if(!errors.isEmpty()){
   return res.status(422).json({
     errors:errors.array()
   })

 }
 let password = await bcrypt.hash(req.body.password, 10);
 let email =req.body.email;
 User.findOne({
   where:{
     email:email
   }
 }).then((user) => {
  //  checking if user exists then dont create
if(user){
  res.status(200).json({
    message:'user already exist'
  })
}
else{
    User.create ({
   email:email,
   password:password
 }).then ((response) => {
   console.log(response)
   res.status(200).json({
     message:`succesfully create`
   })
 }).catch((err) => {
   res.status(500).json({
     message:'error not working' + err
   })
 })
}
 }).catch((err) => {
   console.log(err)
 })


});








  

module.exports = router