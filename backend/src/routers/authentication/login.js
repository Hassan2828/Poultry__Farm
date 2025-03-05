import express from "express";
import {UserModel} from '../../models/authentication/UserModel.js';

const Router = express.Router();

// Login route
Router.post('/login', async(req,res)=>{
    const Email = req.body.email;
    const Password = req.body.Password;

    // Find the user by email
    const user  = await UserModel.findOne({email : Email});

    // Check if user exists
    if(user){
        return res.status(200).json({message : "login successful!", status : 200, user : user});
    }
    else
    {
        return res.status(404).json({message : "Invalid credentials present", status : 404, user : null});
    }
})

export {Router as LoginRouter}