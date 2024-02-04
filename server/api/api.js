const router = require("express").Router();


const usercontroller = require('./userApi');

router.get('/:id', usercontroller.getUser);






module.exports = router;