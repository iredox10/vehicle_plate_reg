import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema({
    vcOwner: {
        type: String,
        required: true
    },
    driverLicense: {
        type: String,
        required: true
    },
    placeIssue: {
        type: String,
        required: true
    },
    stateOfReg: {
        type: String,
        required: true
    },
    vcChasisNumber: {
        type: String,
        required: true
    },
    engineNumber: {
        type: String,
        required: true,
        unique: true
    },
    vcType: {
        type: String,
        required: true
    },
    vcCapacity: {
        type: String,
        required: true
    },
    appliedForPlate:{
        type:Boolean,
        default: false
    },
    plateNumber: {
        type: String,
    }
},{timestamps:true})

const Vehicle = mongoose.model('vehicle',vehicleSchema)

export default Vehicle