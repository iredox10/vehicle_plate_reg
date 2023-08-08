import bcrypt from 'bcrypt'
import User from '../models/user.js'
import Vehicle from '../models/vehicle_reg.js'
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
        res.json(user)
    }catch(err){
        res.status(400).json(err.message)
    }
}