import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET_KEY,{expiresIn:'30d'})
}

export const register= async(req,res)=>{
    try{
        const {username, email, password}=req.body;
        const salt=await bcrypt.genSalt();
        const passwordHash=await bcrypt.hash(password,salt);

        const newUser=new User({
            username,
            email:email.tolowerCase(),
            password:passwordHash,
        })
        password=null;

        const user=await newUser.save();

        const token=generateToken(user._id);
        const userData={_id:user._id,username:user.username,email:user.email};
        res.status(200).json({token,user:userData})
    }
    catch(err){
        res.status(500).json({error:err.message});

    }
}

export const login =async(req,res)=>{
    try{
        const { email, password}=req.body;
        if(!email || !password){
            return res.status(404).json({
                msg:"email or password missing"
            })
        }
        const user= User.findOne({email});
        if(!user){
            return res.status(404).json({
                msg:"Email does not exist"
            })
        }

        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(500).json({
                msg:"invalid password"
            })
        }
        const token=generateToken(user._id);
        delete user.password;
        const userData={
            _id:user._id,
            username:user.username,
            email:user.email
        }
        res.status(200).json({
            token,
            user:userData,
        })

    }
    catch{
        res.status(500).json({
            error:err.message,
        })


    }
}