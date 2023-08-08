import Issuer from '../models/issuer.js'
import Plate from '../models/plate_reg.js'
import User from '../models/user.js'

export const issue_plate = async (req,res) =>{
    try {
        const issuer = await Issuer.findById(req.params.id)
        const plate = await Plate.create()
        issuer.platesIssued.push(plate)
        const user = await User.findOne({email:plate.OwnerEmail})
        await user.plates.push(plate)
        res.json(user)
        res.json(plate)
    } catch (err) {
        res.json(err)
    }
}


