import express from 'express';
import {UserModel} from '../../models/authentication/UserModel.js';

const Router = express.Router();

Router.post('/register', async(req,res)=>{
    const Email = req.body.email;
    const Password = req.body.Password;
    const Mobile_No = req.body.mobile;

    const user = await UserModel.findOne({email : Email});

    if(user){
        return res.status(400).json({message : "User already register on this email number!"});
    }
    else
    {
        console.log(Email, Password,Mobile_No);
        const newUser = new UserModel({
            email : Email,
            password : Password,
            mobile : Mobile_No
        });
        newUser.save();
    return res.status(201).json({message : "User register successfully"});
    }
})

export {Router as RegisterRouter}