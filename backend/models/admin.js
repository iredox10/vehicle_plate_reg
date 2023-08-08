import mongoose from "mongoose";

const admin = new mongoose.Schema({
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
    isAdmin:{
        type: Boolean,
        default: true
    },
    issuers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issuer'
    }]
},{timestamps:true})

const Admin = mongoose.model('Admin',admin)

export default Admin