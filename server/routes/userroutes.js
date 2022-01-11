const router = require('express').Router();
const User = require('../models/usermodels');


// posting to endpoint https:\\localhost400/user

router.post('/login', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get('/get' ,(req , res) => {
  res.send('working')
})
  
// const signUpUser = new User({
//     email:req.body.email,
//     password:req.body.password
//   })
// signUpUser.save()
// .then(data => res.json(data))
// })

module.exports = router