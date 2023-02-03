const User = require('../models/userModels')



exports.getAllUser = async (req, res) => {
    try {
        const user = await User.find()


        // res.status(200).json({
        //     success: true,
        //     data: user,
        //     message: "Get All user Successfully"
        // })

        res.render('home', {
            users: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.addUser = async (req, res) => {
    try {
        const { userName, ipaddress } = req.body

        const newUser = {
            userName,
            ipaddress
        }
        const finalUser = await User.create(newUser);



        res.status(200).json({
            success: true,
            data: finalUser,
            message: "user add Successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

exports.upadateUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findById(id);

        const { userName, email } = req.body

        user.userName = userName,
            user.email = email

        const uptuser = await user.save()

        res.status(200).json({
            success: true,
            data: uptuser,
            message: "user update successfully"
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findById(id);


        const deluser = await User.remove(user);

        res.status(200).json({
            success: true,
            data: deluser,
            message: "User Deleted Sucessfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}