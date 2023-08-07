import bcrypt from 'bcrypt'
import User from '../models/user.js'
export const register = async (req,res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,4)
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            middleName: req.body.middleName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            occupation: req.body.occupation,
            password: hashedPassword,
        })
        res.status(201).json(user)
    }catch(err){
        res.status(400).json(err.message)
    }
}

export const login = async (req,res) =>{
    try {
        const user = User.findOne({email:req.body.email})
        if (!user){
             new Error('email not registered')
            return
        }
        const hashedPassword = await bcrypt.compare(req.body.password)
        if (!hashedPassword){
             new Error('password not correct!!')
            return
        }
        res.status(200).json(user)
    } catch (err) {
        res.json(400).json(err.message)
    }
}