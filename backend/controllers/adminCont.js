import Admin from '../models/admin.js'
import bcrypt from 'bcryptjs'
import Issuer from '../models/issuer.js'

export const admin = async (req,res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,3)
        const admin = await Admin.create({
            fullName: req.body.fullName,
            email:req.body.email,
            password: hashedPassword
        })
        res.status(201).json(admin)
    }catch(err){
        res.status(400).json(err.message)
    }
}

export const login = async (req,res)=>{
    try{
        const admin = await Admin.findOne({email: req.body.email})
       if(!admin) throw new Error('admin not found')
        const password = await bcrypt.compare(req.body.password, admin.password)
        if(!password) throw new Error('password not correct')
        res.status(200).json(admin)
    }catch(err){
        res.status(400).json(err.message)
    }
}

export const register_issuer = async (req,res) =>{
    try{
        const admin = await Admin.findById(req.params.id)
        const issuer = await Issuer.create(req.body)
        admin.issuers.push(issuer)
        admin.save()
        res.status(201).json({issuer,admin})
    }catch(err){
        res.status(400).json(err.message)
    }
}

export const get_admin = async (req,res) => {
    try{
        // const admin = await Admin.findById(req.params.id)
        const admin = await Admin.findById(req.params.id).populate('issuers')
        res.status(200).json({admin})
    }catch(err){
        res.status(404).json(err.message)
    }
}
