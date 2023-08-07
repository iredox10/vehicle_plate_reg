import mongoose from "mongoose";

const issuer = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    platesIssued:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plate'
    }]
},{timestamps:true})

const Issuer = mongoose.model('Issuer',issuer)

export default Issuer