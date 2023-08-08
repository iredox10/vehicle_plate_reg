import mongoose from 'mongoose';

const plate = new mongoose.Schema({
    OwnerEmail:{
        type: String,
        required: true
    },
    vehicleName:{
        type: String,
        required: true,
    },
    plateNumber: String,
    plateType: String,
    issueDate: Date,
    
},{timestamps:true})

const Plate = mongoose.model('Plate',plate)
export default Plate