const express = require('express');
const router = express.Router();

const usercontroller = require('../controller/userController')


router.get('/user', usercontroller.getAllUser);
router.post('/user', usercontroller.addUser);
router.put('/user/:id', usercontroller.upadateUser);
router.delete('/user/:id', usercontroller.deleteUser);



module.exports = router