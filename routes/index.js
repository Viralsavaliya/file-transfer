const express = require('express');
const router = express.Router();

const usercontroller = require('../controller/userController')


router.get('/user', usercontroller.getAllUser);
router.get('/user/:id', usercontroller.oneuser);
router.post('/user', usercontroller.addUser);
router.put('/user/:id', usercontroller.upadateUser);
router.delete('/user/:id', usercontroller.deleteUser);
router.get('/reciver', usercontroller.reciverfile)



router.get('/getlist/:id', usercontroller.getlist)



module.exports = router