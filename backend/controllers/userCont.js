import bcrypt from 'bcryptjs'
import User from '../models/user.js'
import Vehicle from '../models/vehicle_reg.js'
import Plate from '../models/plate_reg.js'
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

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error('email not registered');
        }
        const hashedPassword = await bcrypt.compare(req.body.password, user.password);
        if (!hashedPassword) {
            throw new Error('password not correct!!');
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message }); // Properly format error response
    }
};

export const get_user = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const vehicles = await Vehicle.find({vcOwner: user.email})
        res.json({user,vehicles})
    } catch (err) {
        res.status(404).json(err.message)
    }
}

export const update_user = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(201).json(user)
    }catch(err){
        res.status(404).json(err.message)
    }
}

export const reg_vehicle = async (req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        const vehicle = await Vehicle.create({
            vcOwner: user.email,
            driverLicense: req.body.driverLicense,
            placeIssue: req.body.placeIssue,
            stateOfReg: req.body.stateOfReg,
            vcChasisNumber: req.body.vcChasisNumber,
            engineNumber: req.body.engineNumber,
            vcType: req.body.vcType,
            vcCapacity: req.body.vcCapacity
        })
        user.vehicles.push(vehicle)
        user.save()
        res.json(user)
    }catch(err){
        res.status(400).json(err.message)
    }
}
export const get_vehicle = async (req,res)=>{
    try {
        const vehicle = await Vehicle.findById(req.params.id)
        const plates = await Plate.find({vehicleName:vehicle.vcType})
        res.status(200).json({vehicle,plates})
    } catch (err) {
        res.status(404).json(err.message)
    }
}
export const apply_plate = async (req,res) =>{
    try {
        const vehicle = await Vehicle.findById(req.params.id)
        const plate = await Plate.create({
          ownerEmail: vehicle.vcOwner,
          vehicleName: vehicle.vcType,
          apply: req.body.apply,
        });
       const app = await Vehicle.findByIdAndUpdate(req.params.id,{
            appliedForPlate: req.body.apply
        }, {new:true})
        res.status(201).json({vehicle:vehicle.vcOwner})
    } catch (err) {
        res.status(400).json(err)
    }
}