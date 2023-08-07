import mongoose from 'mongoose'

const user = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    middleName: String,
    email:{
        type: String,
        required: true,
        unique:true
    },
    phoneNumber:{
        type: String,
        required: true,
        unique:true
    },
    address:{
        type: String,
        required: true,
    },
    occupation:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    NIN:String,
    stateOfOrigin: String,
    Lga: String,
    homeTown: String,
    dateOfBirth: String,
    gender: String,
    maritalStatus: String,
    religion: String,
    vehicles:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle'
    }],
    plates:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plate'
    }]
},{timestamps:true})

const User = mongoose.model('User',user)

export default User