import mongoose from 'mongoose'

const vehicle = new mongoose.Schema({
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
},{timestamps:true})

const Vehicle = mongoose.model('vehicle',vehicle)

export default Vehicle