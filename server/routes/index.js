const router = require('express').Router();
const userRoutes = require('./userroutes.js');


router.use('/', userRoutes);


module.exports = router;